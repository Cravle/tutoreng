-- DropForeignKey
ALTER TABLE "ScheduleEvent" DROP CONSTRAINT "ScheduleEvent_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnEvents" DROP CONSTRAINT "UserOnEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnEvents" DROP CONSTRAINT "UserOnEvents_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserOnEvents" ADD CONSTRAINT "UserOnEvents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnEvents" ADD CONSTRAINT "UserOnEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "ScheduleEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleEvent" ADD CONSTRAINT "ScheduleEvent_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
