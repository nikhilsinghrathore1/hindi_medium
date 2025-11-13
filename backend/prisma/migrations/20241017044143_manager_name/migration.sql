-- CreateTable
CREATE TABLE "Emp_manager" (
    "id" SERIAL NOT NULL,
    "Emp_name" TEXT,
    "Manager_id" INTEGER NOT NULL,

    CONSTRAINT "Emp_manager_pkey" PRIMARY KEY ("id")
);
