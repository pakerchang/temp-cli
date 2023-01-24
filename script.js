import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let playName, typeName;
const timeSnap = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function initProject() {
  const title = chalk.bgGreen("Init the project \n");

  await timeSnap();

  title.stop();

  console.log(`${chalk.bgBlue("Testing play ")} I am a process on your computer.
  If you get any question wrong I will be ${chalk.bgRed("Killed")}
  So get all the questions right....
  `);
}

async function askName() {
  const ans = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What your name?",
    default() {
      return "Player";
    },
  });
  playName = ans.player_name;
}

async function question1() {
  const ans = await inquirer.prompt({
    name: "type_ans",
    type: "input",
    message: "What is your favorite framework?",
    default() {
      return "None";
    },
  });
  typeName = ans.type_ans;
}

async function choiceList() {
  const ans = await inquirer.prompt({
    name: "list_option",
    type: "list",
    message: "Choices your option?",
    choices: ["React", "Vue"],
  });
  return handleAns(ans.list_option == "React");
}

// await initProject();
await askName();
await question1();
await choiceList();

async function handleAns(isCorrect) {
  const spinner = createSpinner("Checking ans").start();
  await timeSnap();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playName}.` });
  } else {
    spinner.error({ text: `Something is wrong, please contact pakerzhang@gmail.com` });
    process.exit(1);
  }
}
