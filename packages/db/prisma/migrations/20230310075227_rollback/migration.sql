/*
  Warnings:

  - You are about to drop the column `scheduleEventId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_guests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_guests" DROP CONSTRAINT "_guests_A_fkey";

-- DropForeignKey
ALTER TABLE "_guests" DROP CONSTRAINT "_guests_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "scheduleEventId";

-- DropTable
DROP TABLE "_guests";

-- CreateTable
CREATE TABLE "UserOnEvents" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "UserOnEvents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserOnEvents" ADD CONSTRAINT "UserOnEvents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnEvents" ADD CONSTRAINT "UserOnEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "ScheduleEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
