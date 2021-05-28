import HomeSectionOne from "../../components/sections/homeSectionOne";
import HomeSectionTwo from "../../components/sections/homeSectionTwo";
import floatImg from "../../components/float/floatImg";


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImg}
            
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;