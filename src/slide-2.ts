import { sleep } from "./common";

// @ts-ignore
const isFastForward = window.isFastForward;

const part1StoryScripts = [
  {
    dissapearAfterComplete: false,
    content: "June 2018,",
    delayAfter: 1000,
    // classes: ["text-lg"],
  },
  {
    dissapearAfterComplete: false,
    content: "I graduated from Hanoi University of Science and Technology.",
    delayAfter: 2500,
  },
  {
    dissapearAfterComplete: false,
    content: "3.2 GPA and more than a dozen scholarships,",
    delayAfter: 1000,
  },
  {
    dissapearAfterComplete: false,
    content: "I stood proud—driven, restless, and brimming with ambition.",
    delayAfter: 2500,
  },
  // {
  //   dissapearAfterComplete: false,
  //   content:
  //     "I believed deeply in my potential, eager to carve my mark upon the world.",
  //   delayAfter: 2500,
  // },
  {
    dissapearAfterComplete: false,
    content:
      "2019, I join Vinfast CAE team, among founding members of the team.",
    delayAfter: 2000,
  },
  {
    dissapearAfterComplete: false,
    content: "I'm gonna make big things",
    delayAfter: 1500,
  },
];
const tellPart1Story = async () => {
  const story = document.querySelector(".part-1 .story")!;
  story.innerHTML = "";
  const typeLine = async (lineIndex: number) => {
    const targetLine = part1StoryScripts[lineIndex];
    let lineElement = document.createElement("p");
    lineElement.classList.add(
      "line",
      "active-line",
      "fade-in",
      ...(targetLine.classes ?? [])
    );

    lineElement.textContent = targetLine.content;
    story.appendChild(lineElement);
    if (!isFastForward) {
      await sleep(targetLine.delayAfter);
    }
  };
  const type = async () => {
    for (let index = 0; index < part1StoryScripts.length; index++) {
      await typeLine(index);
    }
  };
  await type();
};

const slideAwayPart1 = async () => {
  const part1 = document.querySelector(".part-1")!;
  part1.classList.add("slide-away", "fade-out");
  await sleep(1000);
  part1.remove();
};
const fadeOutHeadline = async () => {
  const headline = document.querySelector(".headline")!;
  headline.classList.add("fade-out");
};
const showNavButtons = async () => {
  const navButtons = document.querySelector(".nav-buttons")!;
  navButtons.classList.add("fade-in-opacity-50");
  navButtons.classList.remove("hidden");
  navButtons.querySelectorAll("button").forEach((button) => {
    button.classList.remove("hidden");
  });
  setTimeout(() => {
    navButtons.classList.remove("fade-in-opacity-50");
  }, 1000);
  return navButtons;
};
const hideNavButtons = async () => {
  const navButtons = document.querySelector(".nav-buttons")!;
  navButtons.classList.remove("fade-in-opacity-50");
  navButtons.classList.add("fade-out");
  navButtons.classList.add("hidden");
  setTimeout(() => {
    navButtons.classList.remove("fade-out");
  }, 1000);
};
const switchToPart1 = async () => {
  const part1 = document.querySelector(".part-1")!;
  const part2 = document.querySelector(".part-2")!;
  part1.classList.remove("hidden");
  part1.classList.remove("fade-out");
  part1.classList.add("fade-in");
  part2.classList.add("fade-out");
  part1.scrollIntoView({ behavior: "instant", block: "start" });
  await sleep(500);
  part2.classList.add("hidden");
};
const switchToPart2 = async () => {
  const part2 = document.querySelector(".part-2")!;
  const part1 = document.querySelector(".part-1")!;
  part2.classList.remove("hidden");
  part2.classList.remove("fade-out");
  part2.classList.add("fade-in");
  part1.classList.add("fade-out");
  part2.scrollIntoView({ behavior: "instant", block: "start" });
  await sleep(500);
  part1.classList.add("hidden");
};

const part2Contents = [
  {
    title: "Toxic environment",
    content:
      "Teams play politics, not engineering, people just wanna save their ass",
  },
  {
    title: "Conservative industry",
    content:
      "The automotive industry is conservative, changes and innovations are slow",
  },
  {
    title: "No clear career path",
    content: "No clear career path, no clear direction, I felt lost",
  },
  {
    title: "Wild youth's mistakes",
    content: "I was young, too aggressive, too ambitious, too naive",
  },
];

const headlineFallDown = async () => {
  const headline = document.querySelector(".headline-text")! as HTMLElement;

  headline.style.width = `${headline.clientWidth}px`;
  const textContent = headline.textContent!.trim();
  const chars = textContent.split("").reverse();
  for (let index = 0; index < chars.length; index++) {
    const char = chars[index];
    const charElement = document.createElement("span");
    charElement.textContent = char;
    charElement.classList.add("char", "fall-down", "inline-block");
    const truncatedText =
      index === textContent.length - 1
        ? ""
        : textContent.substring(0, textContent.length - index - 1);
    headline.textContent = truncatedText;
    headline.appendChild(charElement);
    if (!isFastForward) {
      await sleep(500 + 200 * Math.random());
    }
    charElement.remove();
  }
  headline.classList.add("slide-top-down");
  // remove headline width style
  headline.style.width = "fit-content";
  headline.textContent = "I can't make it";
  setTimeout(() => {
    headline.classList.remove("slide-top-down");
  }, 1000);
};
const throwInContentForPart2 = async () => {
  headlineFallDown();
  const part2 = document.querySelector(".part-2")!;
  const content = part2.querySelector(".content")!;
  content.innerHTML = "";
  for (let index = 0; index < part2Contents.length; index++) {
    const item = part2Contents[index];
    const element = document.createElement("div");
    element.classList.add(
      "content-item",
      `content-item-${index}`,
      "slide-left-right"
    );
    element.innerHTML = `<h2 class="content-title">${item.title}</h2><p class="content-text">${item.content}</p>`;
    content.appendChild(element);
    if (!isFastForward) {
      await sleep(750);
    }
    element.classList.remove("slide-left-right");
    element.classList.add("shaking");
    if (!isFastForward) {
      await sleep(1000);
    }
  }
};

const part3Contents = [
  {
    Copany: "Open commcerce group",
    Role: "Frontend developer",
    Time: ["Jun 2021 - Dec 2021"],
    TechStack: ["HTML", "CSS", "JS", "Vue", "Go"],
    Products: [
      {
        title: "Cola",
        description: "Collab is a platform for team collaboration",
      },
    ],
  },
  {
    Copany: "Niteco",
    Role: "Fullstack developer",
    Time: ["Jan 2022 - March 2025"],
    TechStack: [
      "React",
      "Typescript",
      "MUI",
      "NextJS",
      "Node",
      "Docker",
      "AWS",
      "Azure",
      "Linux",
    ],
    Products: [
      {
        title: "Collab",
        description: "Collab is a platform for team collaboration",
      },
    ],
  },
  {
    Copany: "(CBTW) DEPUTY",
    Role: "Software engineer",
    Time: ["March 2025 - Present"],
    TechStack: ["Vue", "PHP", "Go", "Docker", "AWS", "Linux"],
    Products: [
      {
        title: "Collab",
        description: "Collab is a platform for team collaboration",
      },
    ],
  },
];

const switchToPart3 = async () => {
  const part3 = document.querySelector(".part-3")!;
  const part2 = document.querySelector(".part-2")!;
  part3.classList.remove("hidden");
  part3.classList.remove("fade-out");
  part3.classList.add("fade-in");
  const headline = document.querySelector(".headline-text")!;
  headline.textContent = "I was reborn, now unstoppable";
  part2.classList.add("hidden");
};
const runProgressBar = async (callback: (percentage: number) => void) => {
  const progressBar = document.querySelector(".part-3 .progress-bar")!;
  const indicator = progressBar.querySelector(".indicator")! as HTMLElement;
  let percentage = 0;
  const increaseProgressBar = async () => {
    indicator.style.width = `${percentage}%`;
    percentage += 0.2;
    callback(percentage);
    if (percentage <= 100) {
      if (!isFastForward) {
        await sleep(25);
      }
      await increaseProgressBar();
    }
  };
  await increaseProgressBar();
};
const throwInContentForPart3 = async () => {
  const progressBar = document.querySelector(".part-3 .progress-bar")!;
  const progressBarContent = progressBar.querySelector(".content")!;
  progressBarContent.innerHTML = "";
  progressBar.querySelector(".final-comment")?.remove();

  progressBarContent.classList.add(
    "grid",
    `grid-cols-${part3Contents.length}`,
    "gap-4"
  );
  // for (let index = 0; index < part3Contents.length; index++) {
  //   const placeholder = document.createElement("div");
  //   placeholder.classList.add(
  //     "placeholder",
  //     `placeholder-${index}`,
  //     "lds-heart"
  //   );
  //   placeholder.appendChild(document.createElement("div"));
  //   progressBar.appendChild(placeholder);
  // }
  const renderContentItem = (index: number) => {
    const item = part3Contents[index];
    const element = document.createElement("div");
    element.classList.add(
      "content-item",
      `content-item-${index}`,
      "text-white",
      "flex",
      "flex-col",
      "gap-2",
      "p-4",
      "rounded-lg",
      "bg-black/60",
      "border-2",
      "border-yellow-400/70",
      "relative",
      "fade-in"
    );
    element.innerHTML = `<div class="handle absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"><div class="handle-bar"></div></div><h2 class="content-title">${
      item.Copany
    }</h2><p class="content-role">${item.Role}</p><p class="content-time">${
      item.Time
    }</p><p class="content-tech-stack">${item.TechStack.join(", ")}</p>`;
    progressBarContent.appendChild(element);
  };
  let currentIndex = 0;
  await runProgressBar((percentage) => {
    if (
      percentage >=
      currentIndex * Math.ceil(100 / (part3Contents.length - 1))
    ) {
      renderContentItem(currentIndex);
      currentIndex++;
    }
    if (percentage >= 100) {
      const finalComment = document.createElement("div");
      finalComment.classList.add(
        "final-comment",
        "text-white",
        "text-center",
        "text-sm",
        "font-bold",
        "fade-in"
      );
      finalComment.textContent =
        "Technology is how humanity reshapes the world — and the revolution won't stop. Keep learning. Keep building. Keep evolving.";
      progressBar.appendChild(finalComment);
    }
  });
};

const setupNavButtonsAfterPart1 = async (buttons: HTMLElement) => {
  const nextButton = buttons.querySelector(".next-button")!;
  const backButton = buttons.querySelector(".back-button")!;

  const newNextButton = nextButton.cloneNode(true) as HTMLButtonElement;
  const newBackButton = backButton.cloneNode(true) as HTMLButtonElement;
  newNextButton.addEventListener("click", async (e) => {
    hideNavButtons();
    await switchToPart2();
    await setupPart2();
  });
  newBackButton.classList.add("hidden");
  nextButton.replaceWith(newNextButton);
  backButton.replaceWith(newBackButton);
};

const setupNavButtonsAfterPart2 = async (buttons: HTMLElement) => {
  const nextButton = buttons.querySelector(".next-button")!;
  const backButton = buttons.querySelector(".back-button")!;
  const newNextButton = nextButton.cloneNode(true) as HTMLButtonElement;
  const newBackButton = backButton.cloneNode(true) as HTMLButtonElement;
  newNextButton.addEventListener("click", async (e) => {
    hideNavButtons();
    await switchToPart3();
    await setupPart3();
  });
  newBackButton.addEventListener("click", async (e) => {
    hideNavButtons();
    await switchToPart1();
    await setupPart1();
  });
  nextButton.replaceWith(newNextButton);
  backButton.replaceWith(newBackButton);
};
const setupNavButtonsAfterPart3 = async (buttons: HTMLElement) => {
  const nextButton = buttons.querySelector(".next-button")!;
  const backButton = buttons.querySelector(".back-button")!;
  const newNextButton = nextButton.cloneNode(true) as HTMLButtonElement;
  const newBackButton = backButton.cloneNode(true) as HTMLButtonElement;
  newBackButton.addEventListener("click", async (e) => {
    hideNavButtons();
    await switchToPart2();
    await setupPart2();
  });
  newNextButton.addEventListener("click", async (e) => {
    hideNavButtons();
    window.location.href = "./slide-3.html";
  });
  nextButton.replaceWith(newNextButton);
  backButton.replaceWith(newBackButton);
};
const setupPart1 = async () => {
  const headline = document.querySelector(".headline-text")!;
  headline.classList.add("fade-in-opacity-50");
  headline.textContent = "I can do it";
  setTimeout(() => {
    headline.classList.remove("fade-in-opacity-50");
  }, 1000);
  await tellPart1Story();
  const navButtons = await showNavButtons();
  setupNavButtonsAfterPart1(navButtons as HTMLElement);
};
const setupPart2 = async () => {
  await throwInContentForPart2();
  const navButtons = await showNavButtons();
  setupNavButtonsAfterPart2(navButtons as HTMLElement);
};
const setupPart3 = async () => {
  await throwInContentForPart3();
  const navButtons = await showNavButtons();
  setupNavButtonsAfterPart3(navButtons as HTMLElement);
};
window.addEventListener("load", async () => {
  await setupPart1();
});
