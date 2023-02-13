import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import layer from "../../resources/layer.png";
import { useUsers } from "../../context/userContext";

const SignUp = (props) => {
  const { registerUser } = useUsers();
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-full h-full flex-row flex">
      <div className="w-1/2 h-full">
        <div className="w-full h-full">
          <img alt="" src={layer} className="w-full h-full rounded-[6px]" />
        </div>
      </div>
      <div className="w-1/2 px-4">
        <div className="w-full h-full text-left">
          <div className="w-full py-4 text-center">
            <div className="w-full flex-row flex">
              <div className="w-1/2 h-full">
                <div
                  className="w-full cursor-pointer "
                  onClick={props.toggleSignIn}
                >
                  Login
                </div>
              </div>
              <div className="w-1/2 ">
                <div
                  className="w-full border-b-app_background_stripe border-b-[3px]"
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
              displayName: "",
              email: "",
              password: "",
              image: null,
            }}
            enableReinitialize
            onSubmit={async (values, actions) => {
              await registerUser(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ setFieldValue, isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="flex-col flex">
                {image ? (
                  <label
                    htmlFor="dropzone"
                    className="block m-auto my-4 w-24 h-24 cursor-pointer rounded-[6px] "
                  >
                    <img
                      alt=""
                      src={image}
                      className="rounded-[6px] w-full h-full m-auto object-cover my-4 cursor-pointer"
                    />
                    <input
                      id="dropzone"
                      className="hidden"
                      name="image"
                      type="file"
                      onChange={(e) =>
                        setFieldValue("image", e.target.files[0]) &&
                        handleImageChange(e)
                      }
                    />
                  </label>
                ) : (
                  <label
                    htmlFor="dropzone"
                    className="block p-8 m-auto my-4 w-fit h-fit cursor-pointer rounded-[6px] bg-slate-200 border-slate-400 border-dashed border-[4px]"
                  >
                    <svg
                      xmlns="http://www.w3-org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#94a3b8"
                    >
                      <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"></path>
                      <circle cx="12" cy="6" r="6"></circle>
                    </svg>
                    <input
                      id="dropzone"
                      className="hidden"
                      name="image"
                      type="file"
                      onChange={(e) =>
                        setFieldValue("image", e.target.files[0]) &&
                        handleImageChange(e)
                      }
                    />
                  </label>
                )}
                <div className="py-2">
                  <div className="text-[15px] font-bold">User name</div>
                  <Field
                    name="displayName"
                    placeholder="User name"
                    className="rounded-[9px] w-full border px-2 py-1"
                  />
                </div>
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
export default SignUp;
