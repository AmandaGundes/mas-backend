import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { CourseUnit } from "./CourseUnit";

@Entity("activities")
class Activity {

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  activity_date: Date;

  @Column()
  course_unit_id: string;

  @Column()
  grade: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => CourseUnit, course_unit => course_unit.activities)
  @JoinTable()
  @JoinColumn({ name: 'course_unit_id', referencedColumnName: 'id' })
  course_unit: CourseUnit;
}

export { Activity };