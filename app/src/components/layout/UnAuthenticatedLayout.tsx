import Image from "next/image";

const UnAuthenticatedLayout = ({ children }: any) => {
  return (
    <main>
      <div className="flex align-center justify-center ">
        <div
          className="flex items-center justify-center h-screen flex-col gap-3"
          style={{
            width: "70%",
            height: "100vh",
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(35deg, #21D4FD 0%, #B721FF 100%)",
          }}
        >
          <h1 className="text-3xl font-bold text-white">Hi, Welcome back</h1>
          <Image
            width="500"
            height="500"
            src="/images/illustration_dashboard.png"
            alt="banner"
            className="responsive"
          />
        </div>
        <div
          className="align-center"
          style={{
            width: "30%",
            height: "100vh",
            paddingLeft: "35px !important",
            paddingRight: "35px !important",
            textAlign: "left",
            backgroundColor: "#FFFFFF",
          }}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default UnAuthenticatedLayout;
