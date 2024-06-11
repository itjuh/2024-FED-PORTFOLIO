import { FaHome, FaMarker, FaCheckCircle, FaPlusSquare, FaAddressBook } from "react-icons/fa";
import { FaLink, FaUserGear, FaPersonCircleExclamation } from "react-icons/fa6";
import { HiOutlineReceiptPercent, HiAcademicCap } from "react-icons/hi2";
import { RiCake3Line, RiPsychotherapyFill } from "react-icons/ri";
import { MdFace3 } from "react-icons/md";
import { LiaKeyboard } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { BsFileEarmarkPersonFill, BsHourglassSplit } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { TiBusinessCard } from "react-icons/ti";
import { GrDocumentUser } from "react-icons/gr";
import { LuSprout } from "react-icons/lu";

export function Icon({iconName, iconSize, iconColor}) {
  // 아이콘사이즈, 글자크기 선택받기
  console.log("불러옴", iconName);
  const iconMap = {
    face: <MdFace3 />,
    cake: <RiCake3Line />,
    keyboard: <LiaKeyboard />,
    coffee: <SiBuymeacoffee />,
    home: <FaHome />,
    period: <BsHourglassSplit />,
    percent: <HiOutlineReceiptPercent />,
    purpose: <TbTargetArrow />,
    link: <FaLink />,
    skill: <FaUserGear />,
    point: <FaMarker />,
    check: <FaCheckCircle />,
    plus: <FaPlusSquare />,
    personal: <FaPersonCircleExclamation />,
    personImg: <BsFileEarmarkPersonFill />,
    address: <FaAddressBook />,
    other: <RiPsychotherapyFill />,
    edu: <HiAcademicCap />,
    career: <TiBusinessCard />,
    introduction: <GrDocumentUser />,
    leap: <LuSprout />,
  };
  if (iconColor === null) {
    iconColor = "#434343";
  } 
  const iconStyle = {
    color: iconColor,
    fontSize: iconSize + "px",
  };
  return <div style={iconStyle}>{iconMap[iconName]}</div>;
}