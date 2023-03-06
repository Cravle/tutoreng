-- AlterTable
ALTER TABLE "ScheduleEvent" ALTER COLUMN "homeworkUrl" DROP NOT NULL,
ALTER COLUMN "teacherNotes" DROP NOT NULL,
ALTER COLUMN "studentNotes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isGraduated" DROP DEFAULT;
