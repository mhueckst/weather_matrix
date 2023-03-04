/** @module Models/User */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";

/**
 *  Class representing locations table
 */
@Entity({name: "location"})
export class Location extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	name: string;

	@Column('text')
	latitude: string;

	@Column('text')
	longitude: string;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;
}
