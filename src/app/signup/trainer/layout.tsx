import type { Metadata } from "next";
import { Box } from "@mui/material";
import { Typography } from "@/components";

export const metadata: Metadata = {
  title: "트레이너 회원가입",
  description: "멋진 제품을 확인해보세요",
};

export default function TrainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box height="100%" display={"flex"} flexDirection={"column"} mt={4}>
        <Box display={"flex"} flexDirection={"column"} fontSize={30} fontWeight={700}>
          <Typography variant="h3">
            <Typography variant="body1" sx={{ fontSize: "40px", fontWeight: "bold" }}>
              훌륭한 트레이너님
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "40px", fontWeight: "bold" }}>
              {`반갑습니다 :)`}
            </Typography>
          </Typography>
        </Box>
        <section>{children}</section>
      </Box>
    </>
  );
}
