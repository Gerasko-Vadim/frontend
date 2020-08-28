import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux';
import {UserRegistr} from "./userRegistration.js"
import {Spiner} from "./spiner";
import {Success} from "./Success";
import {SuccessCompany} from "./SuccessCompany";
import {dataHome} from "./homeData";
import {countBest} from "./countBest"
import {tourSearch} from "./tourSearch"
import {trigerSearch} from "./trigerSearch"
import {dataActivity} from "./dataActivity";
import {allTour}from "./allTour";
import {trigerBest}from "./trigerBest";
import {trigerActivity} from "./trigerActivity";
import {filterTour} from "./filterTour";
import {trigerFilter} from "./trigerFilter";
import {detailsTour} from "./detailsTour"
import {allDestinations} from "./allDestinations"
import {tourData} from "./tourData"
import {SuccessSignIn} from "./signIn"
import {custimerCabinet} from "./custimerCabinet";
import {changePassword} from "./changePassword"
import {groupData} from "./groupDetails";
import {groupInfo} from "./groupInfo";

const rootReduser = combineReducers({
    UserRegistr,
    Spiner,
    Success,
    SuccessCompany,
    dataHome,
    countBest,
    tourSearch,
    trigerSearch,
    trigerBest,
    trigerActivity,
    dataActivity,
    allTour,
    filterTour,
    trigerFilter,
    detailsTour,
    allDestinations,
    tourData,
    SuccessSignIn,
    custimerCabinet,
    changePassword,
    groupData,
    groupInfo
});

export default rootReduser;