import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/orderSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { customOrderSchema } from "../utils/yupValidation";

export default function CustomOrder() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user.user);

  const [preview, setPreview] = useState(null);

  useEffect(()=>{console.log(user)}, [])

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {

    try {
      const fd = new FormData();
      fd.append("image", values.file);
      fd.append("description", values.description);
      fd.append("size", values.size);
      fd.append("material", values.material);

      console.log(fd);
      console.log(user);

      dispatch(addOrder(fd));

      resetForm();
      setPreview(null);
      alert("Design uploaded — order created!");
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fce4ec] flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl sm:text-5xl font-extrabold underline underline-offset-8 decoration-2 decoration-[#7a4c36] text-center font-cormorant text-[#3d5234] mb-10 tracking-wide">
        Upload Custom Idol Design
      </h2>
      <Formik
        initialValues={{
          file: null,
          description: "",
          size: "",
          material: "",
        }}
        validationSchema={customOrderSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="max-w-lg w-full bg-white p-6 rounded-xl shadow">
            {/* File Upload */}
            <label className="block mb-2 text-sm font-medium font-quicksand">
              Sketch / Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFieldValue("file", f);
                if (f) setPreview(URL.createObjectURL(f));
                else setPreview(null);
              }}
              className="bg-gray-300 px-2 font-quicksand w-54 hover:bg-gray-400 hover:cursor-pointer"
            />
            <ErrorMessage
              name="file"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 w-48 h-48 object-cover rounded"
              />
            )}

            {/* Description */}
            <label className="block mt-4 font-quicksand">Description</label>
            <Field
              as="textarea"
              name="description"
              className="w-full p-2 border rounded mt-1 font-quicksand"
              rows={4}
              placeholder="Describe size, colors, motifs, any reference notes..."
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500 text-sm"
            />

            <div className="flex gap-3 mt-3">
              {/* Size */}
              <div className="flex-1">
                <label className="font-quicksand">Size</label>
                <Field
                  name="size"
                  className="w-full p-2 border rounded mt-1 font-quicksand"
                  placeholder="e.g. 12 inch"
                />
                <ErrorMessage
                  name="size"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Material */}
              <div className="flex-1">
                <label className="font-quicksand">Material</label>
                <Field
                  name="material"
                  className="w-full p-2 border rounded mt-1 font-quicksand"
                  placeholder="Clay / Paper-mache"
                />
                <ErrorMessage
                  name="material"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7a4c36] text-white px-4 py-2 rounded disabled:opacity-50 font-quicksand"
              >
                {isSubmitting ? "Uploading..." : "Submit Design"}
              </button>

              <div className="text-sm text-gray-600 font-lora">
                Status: pending after upload
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
