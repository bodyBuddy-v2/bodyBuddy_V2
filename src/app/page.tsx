import Button from "@/components/Button/Button";
import { auth } from "@/auth";
import Theme from "@/components/Theme";
import Typography from "@/components/Typography";

export default async function Home() {
  return (
    <div>
      <Typography variant="h2">바디버디홈이양</Typography>

      <Button variant="outlined" color="primary" sx={{ color: "primary.main" }}>
        Home
      </Button>
    </div>
  );
}
