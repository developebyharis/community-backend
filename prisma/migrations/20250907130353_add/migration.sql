/*
  Warnings:

  - A unique constraint covering the columns `[userId,commentId]` on the table `CommentVote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,postId]` on the table `PostVote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CommentVote_userId_commentId_key" ON "public"."CommentVote"("userId", "commentId");

-- CreateIndex
CREATE UNIQUE INDEX "PostVote_userId_postId_key" ON "public"."PostVote"("userId", "postId");
