export async function getHospital(id: string) {
  const res = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch hospital: ${id}`);
  }

  return await res.json();
}
