const NavItem = ({ text, textLink }) => {
  return (
    <div className="font-neueHaas text-xl font-semibold  text-white  ">
      <a href={textLink}>{text}</a>
    </div>
  );
};

export default NavItem;
