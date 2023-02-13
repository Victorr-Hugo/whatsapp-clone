import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useChat } from "../../context/chatContext";

const ChatForm = () => {
  const { handleSend } = useChat();
  const [thumbnail, setThumbnail] = useState(null);
  const handleImage = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="fixed bottom-0 w-full text-left px-5  py-1 box-border border-t bg-alternative_app_background">
      <div className="w-full"></div>
      <div className="w-full flex-row flex">
        <Formik
          initialValues={{
            text: "",
            image: null,
          }}
          enableReinitialize
          onSubmit={async (values, actions) => {
            await handleSend(values);
            actions.resetForm();
          }}
        >
          {({ setFieldValue, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="w-full flex-row flex">
              <div className="my-auto">
                <label htmlFor="dropzone" className="cursor-pointer my-auto">
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    enableBackground="new 0 0 24 24"
                    fill="#54656f"
                  >
                    <path d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"></path>
                  </svg>
                  <input
                    type="file"
                    name="image"
                    id="dropzone"
                    onChange={(e) =>
                      setFieldValue("image", e.target.files[0]) &&
                      handleImage(e)
                    }
                    className="hidden"
                  />
                </label>
              </div>
              <div className="w-full flex px-5 my-auto">
                <div className="bg-white px-4 py-2 rounded-[8px] my-[5px] mx-[10px] w-2/3 flex-row flex">
                  {thumbnail && (
                    <img
                      alt=""
                      src={thumbnail}
                      className="h-10 w-10 object-cover rounded-[9px] mr-3 hover:opacity-80 cursor-pointer"
                      onClick={() =>
                        setThumbnail(null) && setFieldValue("image", null)
                      }
                    />
                  )}
                  <Field
                    name="text"
                    placeholder="Write your message here."
                    className="w-full my-auto h-full outline-none"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChatForm;
