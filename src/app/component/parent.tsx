import NameComponent from "./name";
import TeacherComponent from "./teacher";
import DishComponent from "./dish";

const ParentComponent = () => {
  let name = "My Name is Syeda Uzma Ahmed!- Quarter # 02, 11th Assignment Props";
  let teacher = "Sir Ali Jawwad! is my favorite Teacher -------";
  let dish = "Biryani is my favorite dish--------------------!";

  return (
    <div className="mt-10">
      <NameComponent name={name} />
      <TeacherComponent teacher={teacher} />
      <DishComponent dish={dish} />
    </div>
  );
};

export default ParentComponent;
