import { Button } from "@mui/material";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      바디버디홈이양
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
