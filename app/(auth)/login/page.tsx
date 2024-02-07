import UnAuthenticatedLayout from "@/app/src/components/layout/UnAuthenticatedLayout";
import { MyInput } from "@/app/src/components/forms/MyInput";
import MyLink from "@/app/src/components/typography/MyLink";

const Login = (props: any) => {
  return (
    <UnAuthenticatedLayout>
      <form className="p-4 h-full flex flex-col align-items-center justify-center">
        <h1 className="mb-2 font-bold text-gray-700 text-2xl">Sign In</h1>
        <p className="mb-5 text-sm text-gray-300">Use your email id to login </p>
        <MyInput type="email" name="email" id="email" placeholder="email" />
        <MyInput type="password" name="password" id="password" placeholder="password" />
        <MyLink label="Forgot password?" to="#" classes="text-right text-xs" />
        <MyLink
          {...props}
          label="Login"
          type="submit"
          to="#"
          style={{
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(35deg, #21D4FD 0%, #B721FF 100%)",
          }}
          classes="rounded-sm bg-blue w-full text-center border p-2 mt-4 bg-neutral-200 text-gray-100 hover:text-gray-100"
        />
      </form>
    </UnAuthenticatedLayout>
  );
};

export default Login;
