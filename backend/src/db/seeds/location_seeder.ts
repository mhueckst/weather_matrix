/** @module Seeds/User */
import {Location} from "../models/location";
import {Seeder} from "../../lib/seed_manager";
import {FastifyInstance} from "fastify";

/**
 * UserSeeder class - Model class for interacting with "users" table
 */
export class LocationSeeder extends Seeder {
	/**
	 * Runs the Location table's seed
	 * @function
	 * @param {FastifyInstance} app
	 * @returns {Promise<void>}
	 */
	override async run(app: FastifyInstance) {
		app.log.info("Seeding Locations...");
		// clear out whatever's already there
		// note we cannot use .clear() because postgres cascade is bugged in Typeorm
		// https://github.com/typeorm/typeorm/issues/1649
		await app.db.location.delete({});

		for (let i = 0; i < 10; i++) {
			let loc = new Location();
			loc.name = "location" + i;
			loc.latitude = "latitude" + i;
			loc.longitude = "longitude" + i;
			await loc.save();
			app.log.info("Seeded location " + i);
		}
	}
}

// generate default instance for convenience
export const LocationSeed = new LocationSeeder();

