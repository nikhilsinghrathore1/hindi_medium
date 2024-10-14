-- CreateTable
CREATE TABLE "wipro_emp" (
    "EmpID" SERIAL NOT NULL,
    "EmpName" TEXT NOT NULL,
    "DeptId" INTEGER NOT NULL,
    "Salary" INTEGER NOT NULL,
    "JoiningYear" INTEGER NOT NULL,

    CONSTRAINT "wipro_emp_pkey" PRIMARY KEY ("EmpID")
);
