import React from "react";
import { Field, Formik, Form } from "formik";
import layer from "../../resources/layer.png";
import { useUsers } from "../../context/userContext";

const SignIn = (props) => {
  const { signinUser } = useUsers();
  return (
    <div className="w-full h-full flex-row flex">
      <div className="w-1/2">
        <div className="w-full h-full">
          <img alt="" src={layer} className="w-full h-full rounded-[6px]" />
        </div>
      </div>
      <div className="w-1/2 px-4">
        <div className="w-full h-full text-left">
          <div className="w-full py-4 text-center">
            <div className="w-full flex-row flex">
              <div className="w-1/2">
                <div className="w-full transition-all ease-in-out dealay-150 border-b-app_background_stripe border-b-[3px] duration-500 cursor-pointer">
                  Login
                </div>
              </div>
              <div className="w-1/2">
                <div
                  className="w-full cursor-pointer"
                  onClick={props.toggleSignIn}
                >
                  Sign up
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 text-[24px] font-semibold">Hey, hello 👋</div>
          <div className="">Please enter your details.</div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            enableReinitialize
            onSubmit={async (values, actions) => {
              await signinUser(values);
              console.log(values);
              actions.resetForm();
              actions.setSubmitting(false);
              window.location.reload(false);
            }}
          >
            {({ setFieldValue, isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="flex-col flex pt-5">
                <div className="py-2">
                  <div className="text-[15px] font-bold">Email</div>
                  <Field
                    name="email"
                    placeholder="email"
                    className="rounded-[9px] w-full border px-2 py-1"
                  />
                </div>
                <div className="py-2">
                  <div className="text-[15px] font-bold">Password</div>
                  <Field
                    name="password"
                    placeholder="password"
                    className="rounded-[9px] w-full border px-2 py-1"
                  />
                </div>
                <div className="text-right px-3 text-[14px] underline text-[#00a884] cursor-pointer mr-0 ml-auto">
                  Forgot password?
                </div>
                <button
                  type="submit"
                  className="my-3 w-full rounded-[9px] bg-app_background_stripe py-1 text-white text-[18px] font-medium hover:opacity-95"
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
