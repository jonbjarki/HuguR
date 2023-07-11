export default function Page({ params }: { params: { id: number } }) {
  return <div>Course: {params.id}</div>
}