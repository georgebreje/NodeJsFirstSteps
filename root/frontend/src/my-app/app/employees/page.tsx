import getAllEmployees from '@/lib/getAllEmployees'
import Link from 'next/link';
import React from 'react'

export default async function EmployeesPage() {
    const employeesData: Promise<Employee[]> = getAllEmployees();

    const employees = await employeesData;

    const content = (
        <>
            <h2>
                {employees.map(employee => {
                    return (
                        <>
                            <p>
                                <Link href={`/employees/${employee._id}`}>{employee.firstname} {employee.lastname}</Link>
                            </p>
                        </>
                    )
                })}
            </h2>
        </>
    )

    return content;
}
