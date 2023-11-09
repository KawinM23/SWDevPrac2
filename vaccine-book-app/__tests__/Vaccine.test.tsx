import HospitalCatalog from "@/components/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const hospitalJson = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "6523cde25a0331833338e008",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "6523cde25a0331833338e008",
    },
    {
      _id: "6523ce015a0331833338e00b",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "6523ce015a0331833338e00b",
    },
    {
      _id: "6523ce1f5a0331833338e00e",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "6523ce1f5a0331833338e00e",
    },
    {
      _id: "6541f8ac35bae1f24caf964e",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "02-244-3000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "6541f8ac35bae1f24caf964e",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have correct number of images", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJson: hospitalJson,
    });
    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalImgs = screen.queryAllByRole("img");
      expect(hospitalImgs.length).toBe(4);
    });
  });
});
