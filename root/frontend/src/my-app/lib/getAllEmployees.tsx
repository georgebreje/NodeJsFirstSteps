export default async function getAllEmployees() {
    const res = await fetch('http://localhost:3500/employees');
    
    if (!res.ok) return undefined;
    
    return res.json();
}