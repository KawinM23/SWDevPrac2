import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <form action={addHospital} className="mt-5 mx-20 text-left">
      <div className="text-xl font-bold ">Add Hospital</div>
      <div className="flex items-center my-2">
        <label htmlFor="name" className="w-auto block pr-4 text-gray-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Hospital Name"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="address" className="w-auto block pr-4 text-gray-800">
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="district" className="w-auto block pr-4 text-gray-800">
          District
        </label>
        <input
          id="district"
          name="district"
          type="text"
          placeholder="District"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="province" className="w-auto block pr-4 text-gray-800">
          Province
        </label>
        <input
          id="province"
          name="province"
          type="text"
          placeholder="Province"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="postalcode" className="w-auto block pr-4 text-gray-800">
          Postal code
        </label>
        <input
          id="postalcode"
          name="postalcode"
          type="text"
          placeholder="10310"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="tel" className="w-auto block pr-4 text-gray-800">
          Telephone
        </label>
        <input
          id="tel"
          name="tel"
          type="text"
          placeholder="0123456789"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="flex items-center my-2">
        <label htmlFor="picture" className="w-auto block pr-4 text-gray-800">
          Image
        </label>
        <input
          id="picture"
          name="picture"
          type="text"
          placeholder="URL"
          className="bg-white border-2 border-gray-200 rounded w-60 p-2 text-gray-800 focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-20"
      >
        Add
      </button>
    </form>
  );
}
