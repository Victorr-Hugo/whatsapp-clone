import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useUsers } from "../../context/userContext";

const ConfigNav = () => {
  const { setConfigNav, currentUser, updateDisplayName, updatePhotoURL } =
    useUsers();
  const [updatedDisplayName, setUpdatedDisplayName] = useState("");
  const [sendIcon, setSendIcon] = useState(false);
  const [showImageSettings, setShowImageSettings] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDisplayName(updatedDisplayName);
    window.location.reload(false);
  };

  const handleDisplayNameChange = (e) => {
    setUpdatedDisplayName(e.target.value);
    if (e.target.value.length > 0) {
      setSendIcon(true);
    } else {
      setSendIcon(false);
    }
  };

  const handleFileChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="w-full h-full">
      <div className="bg-[#008069] w-full pt-[70px] pb-6 px-3">
        <div className="w-full flex-row flex">
          <div onClick={() => setConfigNav(false)} className="cursor-pointer">
            <svg viewBox="0 0 24 24" height="24" width="24" fill="white">
              <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
            </svg>
          </div>
          <div className="text-white px-9">Profile</div>
        </div>
      </div>
      <div className="w-full bg-alternative_app_background">
        <div className="w-full  justify-center items-center pt-10">
          <div className="w-full justify-center items-center relative">
            <div className="bg-white pt-5 shadow -bottom-10 rounded-[9px] left-1/2 py-3 text-[14px] text-neutral-900">
              <div>Update Photo</div>
              <label
                htmlFor="dropzone"
                className="my-2 cursor-pointer px-4 py-2"
              >
                <Formik
                  initialValues={{
                    image: null,
                  }}
                  enableReinitialize
                  onSubmit={async (values, actions) => {
                    await updatePhotoURL(values);
                    actions.resetForm();
                    window.location.reload(false);
                  }}
                >
                  {({ setFieldValue, isSubmitting, handleSubmit }) => (
                    <Form
                      onSubmit={handleSubmit}
                      className="flex-col flex px-10"
                    >
                      <input
                        className=""
                        placeholder="Update photo"
                        type="file"
                        id="dropzone"
                        name="image"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                      />
                      <button
                        type="submit"
                        className=" border rounded-[9px] my-4 py-2 text-[19px] "
                      >
                        Save
                      </button>
                    </Form>
                  )}
                </Formik>
              </label>
              <div className="my-2 cursor-pointer hover:bg-[#eae6df] px-4 py-2">
                Remove photo
              </div>
            </div>
          </div>
        </div>
        {sendIcon === true ? (
          <form
            onSubmit={handleSubmit}
            className="w-full mt-10 bg-white border-b shadow px-10 py-2"
          >
            <div className="text-[16px] text-[#008069] text-left">
              User name
            </div>
            <div className="w-full flex-row border-b-[2px] border-app_background_stripe flex py-4">
              <input
                value={updatedDisplayName}
                placeholder={currentUser.displayName}
                className="outline-none my-auto"
                onChange={(e) => setUpdatedDisplayName(e.target.value)}
              />
              <button type="submit" className="mr-0 ml-auto cursor-pointer">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
                  <path d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"></path>
                </svg>
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full mt-10 bg-white shadow px-10 py-2">
            <div className="text-[16px] text-[#008069] text-left">
              User name
            </div>
            <div className="w-full flex-row flex py-4">
              <input
                placeholder={currentUser.displayName}
                className="outline-none my-auto"
                onChange={(e) => handleDisplayNameChange(e)}
              />
              <button type="submit" className="mr-0 ml-auto cursor-pointer">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
                  <path d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigNav;
