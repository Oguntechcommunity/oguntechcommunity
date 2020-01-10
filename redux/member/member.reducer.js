import { MembersActionTypes } from './member.types'

import Image1 from "../../public/images/image1.png";
import Image2 from "../../public/images/image2.png";
import Image3 from "../../public/images/image3.png";
import Image4 from "../../public/images/image4.png";
import Image5 from "../../public/images/image5.png";
import Image6 from "../../public/images/image6.png";


const INITIAL_STATE = {
    members: [
            {
                id: 1,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image1}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            },
            {
                id: 2,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image2}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            },
            {
                id: 3,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image3}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            },
            {
                id: 4,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image4}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            },
            {
                id: 5,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image5}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            },
            {
                id: 6,
                name: "Soliudeen Ogunsola",
                title: "Product Designer",
                image: `${Image6}`,
                websiteUrl: "https://github.com/Trapintrovert",
                email: "email@mail.com"
            }
        ]
}
const memberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MembersActionTypes.FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                members: action.payload
                
            }
            default:
                return state;
    }
}

export default memberReducer;