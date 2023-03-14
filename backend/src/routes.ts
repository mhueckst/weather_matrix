/** @module Routes */
import cors from "cors";
import {FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions} from "fastify";
import {Location} from "./db/models/location";
import {ILike, LessThan, Not} from "typeorm";
import {getForecastIcons} from "./lib/weatherService";

/**
 * App plugin where we construct our routes
 * @param {FastifyInstance} app our main Fastify app instance
 */
export async function weatherMatrix_routes(app: FastifyInstance): Promise<void> {

	// Middleware
	// TODO: Refactor this in favor of fastify-cors
	app.use(cors());

	/**
	 * Route replying to /test path for test-testing
	 * @name get/test
	 * @function
	 */
	app.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
		reply.send("GET Test");
	});


	/**
	 * Route getting all locations to test location seeder
	 * @name get/locations
	 */
	app.get("/locations", async(request: FastifyRequest, reply: FastifyReply) => {
		let locations = await app.db.location.find();
		reply.send(locations);
	});

	/*
	ACTUAL APP ROUTES:
	***********************************************
	For testing 'get all locations' from DB

	/*
	https://weather-gov.github.io/api/general-faqs
	first just get forecast at one location:
	(0. get lat long from DB and append onto baseURL for query)
	1. query baseURL with lat,long appended for location JSON
	2. parse location JSON -> properties: for forecast URL
	3. query forecastURL for forecast JSON
	4. get periods[i].icon for forecast period (7 days/nights)
	5. (put the above in a for loop, so it returns all forecasts for all locations in table)
	*/

	/**
	 * Route getting icons for all forecast locations
	 * TODO: get all locations forecasts- currently just 'location0' to iron out API call
	 */
	app.get("/lat_long", async(request: FastifyRequest, reply: FastifyReply) => {
		let location = await app.db.location.find({
			select: {
				latitude: true,
				longitude: true
			}
			// where: {
			// 	name: "location0"
			// }
		});
		console.log(location)
		let icons:any = [];
		for (let i = 0; i< location.length; i++) {
			icons[i] = await (getForecastIcons(location[i].latitude, location[i].longitude));
		}
		console.log(icons)

		reply.send(icons);
	});





}


// app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
// 	// This will return all users along with their associated profiles and ip histories via relations
// 	// https://typeorm.io/find-options
// 	let users = await app.db.user.find({
// 		// This allows you to define which fields appear/do not appear in your result.
// 		select: {
// 			id: true,
// 			name: true,
// 			email: true,
// 			updated_at: true,
// 			created_at: false,
// 		},
// 		// This defines which of our OneToMany/ManyToMany relations we want to return along with each user
// 		relations: {
// 			profiles: true,
// 			ips: {
// 				// We don't need to return user as a part of ip_history because we already know the user
// 				user: false
// 			},
// 		},
// 		where: {
// 			// This will filter our results only to users with an id less than 70.  How cute is this?!?
// 			id: LessThan(70),
// 			profiles: {
// 				// People who name their dog this deserve to be left out, and people naming other species this definitely do
// 				// No offense, people with pets named spot
// 				name: Not(ILike("spot")),
// 			}
// 		}
// 	});
// 	reply.send(users);
// });

// CRUD impl for users
// Create new user

// Appease fastify gods
// 	const post_users_opts: RouteShorthandOptions = {
// 		schema: {
// 			body: {
// 				type: 'object',
// 				properties: {
// 					name: {type: 'string'},
// 					email: {type: 'string'}
// 				}
// 			},
// 			response: {
// 				200: {
// 					type: 'object',
// 					properties: {
// 						user: {type: 'object'},
// 						ip_address: {type: 'string'}
// 					}
// 				}
// 			}
// 		}
// 	};
//
// 	/**
// 	 * Route allowing creation of a new user.
// 	 * @name post/users
// 	 * @function
// 	 * @param {string} name - user's full name
// 	 * @param {string} email - user's email address
// 	 * @returns {IPostUsersResponse} user and IP Address used to create account
// 	 */
// 	app.post<{
// 		Body: IPostUsersBody,
// 		Reply: IPostUsersResponse
// 	}>("/users", post_users_opts, async (req, reply: FastifyReply) => {
//
// 		const {name, email} = req.body;
//
// 		const user = new User();
// 		user.name = name;
// 		user.email = email;
//
// 		const ip = new IPHistory();
// 		ip.ip = req.ip;
// 		ip.user = user;
// 		// transactional, transitively saves user to users table as well IFF both succeed
// 		await ip.save();
//
// 		//manually JSON stringify due to fastify bug with validation
// 		// https://github.com/fastify/fastify/issues/4017
// 		await reply.send(JSON.stringify({user, ip_address: ip.ip}));
// 	});
//
//
// 	// PROFILE Route
// 	/**
// 	 * Route listing all current profiles
// 	 * @name get/profiles
// 	 * @function
// 	 */
// 	app.get("/profiles", async (req, reply) => {
// 		let profiles = await app.db.profile.find();
// 		reply.send(profiles);
// 	});
//
//
// 	app.post("/profiles", async (req: any, reply: FastifyReply) => {
//
// 		const {name} = req.body;
//
// 		const myUser = await app.db.user.findOneByOrFail({});
//
// 	  const newProfile = new Profile();
// 	  newProfile.name = name;
// 		newProfile.picture = "ph.jpg";
// 		newProfile.user = myUser;
//
// 		await newProfile.save();
//
// 		//manually JSON stringify due to fastify bug with validation
// 		// https://github.com/fastify/fastify/issues/4017
// 		await reply.send(JSON.stringify(newProfile));
// 	});
//
// 	app.delete("/profiles", async (req: any, reply: FastifyReply) => {
//
// 		const myProfile = await app.db.profile.findOneByOrFail({});
// 		let res = await myProfile.remove();
//
// 		//manually JSON stringify due to fastify bug with validation
// 		// https://github.com/fastify/fastify/issues/4017
// 		await reply.send(JSON.stringify(res));
// 	});
//
// 	app.put("/profiles", async(request, reply) => {
// 		const myProfile = await app.db.profile.findOneByOrFail({});
//
//
// 		myProfile.name = "APP.PUT NAME CHANGED";
// 		let res = await myProfile.save();
//
// 		//manually JSON stringify due to fastify bug with validation
// 		// https://github.com/fastify/fastify/issues/4017
// 		await reply.send(JSON.stringify(res));
// 	});
//
// }
//
// // Appease typescript request gods
// interface IPostUsersBody {
// 	name: string,
// 	email: string,
// }
//
// /**
//  * Response type for post/users
//  */
// export type IPostUsersResponse = {
// 	/**
// 	 * User created by request
// 	 */
// 	user: User,
// 	/**
// 	 * IP Address user used to create account
// 	 */
// 	ip_address: string
// }
