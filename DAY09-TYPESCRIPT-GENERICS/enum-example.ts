// Named Constants using Enum
enum Menu {
  Japanese,
  American,
  Indian,
  Italian,
}

// Assign a choice
const customerChoice: Menu = Menu.Japanese;

// Switch based on Enum value
switch (+customerChoice) {
  case Menu.Japanese:
    console.log("Food milega Japanese");
    break;
  case Menu.American:
    console.log("Food milega American");
    break;
  case Menu.Indian:
    console.log("Food milega Indian");
    break;
  case Menu.Italian:
    console.log("Food milega Italian");
    break;
  default:
    console.log("We do not serve this food");
}
