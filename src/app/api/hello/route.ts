export function GET() {
  const data = { message: "Hello from the API!" }; // 일반 객체 사용
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
