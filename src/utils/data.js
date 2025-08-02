const images = [
  {
    url: "https://i.pinimg.com/1200x/3d/8a/34/3d8a3456bf270110b7339cabb14c80a9.jpg",
    price: "₹799",
  },
  {
    url: "https://i.pinimg.com/1200x/77/58/1a/77581ab8868ba8579109b78245741843.jpg",
    price: "₹999",
  },
  {
    url: "https://i.pinimg.com/1200x/34/a7/66/34a7669679d7afd0cabf48046ad29728.jpg",
    price: "₹1499",
  },
  {
    url: "https://i.pinimg.com/736x/be/f8/3f/bef83fc7a5cba3d79bd43e9baf8f4710.jpg",
    price: "₹1850",
  },
  {
    url: "https://i.pinimg.com/1200x/07/3e/d9/073ed95142dc9b2c727bfbf907348e4a.jpg",
    price: "₹2800",
  },
  {
    url: "https://i.pinimg.com/736x/db/00/28/db00289cda157215e5ff2919f6fe5a0f.jpg",
    price: "₹999",
  },
  {
    url: "https://i.pinimg.com/1200x/fd/06/29/fd0629876dcce434dd3f0ec84a5f9680.jpg",
    price: "₹949",
  },
  {
    url: "https://i.pinimg.com/736x/fd/0a/54/fd0a54278eadf90cffe95b689db071c1.jpg",
    price: "₹1699",
  },
  {
    url: "https://i.pinimg.com/736x/3f/39/0f/3f390ff2911c4f66f3e6150b1e1b3442.jpg",
    price: "₹999",
  },
  {
    url: "https://i.pinimg.com/736x/dc/1f/0b/dc1f0bca5c105277ec085d90eda1e6b3.jpg",
    price: "₹2149",
  },
  {
    url: "https://i.pinimg.com/1200x/80/a1/df/80a1df75ba7dbe8ecce6f1de5c520d4f.jpg",
    price: "₹1799",
  },
  {
    url: "https://i.pinimg.com/1200x/ca/48/44/ca48446a32522826737b0f63167b090c.jpg",
    price: "₹2899",
  },
  {
    url: "https://i.pinimg.com/1200x/b1/79/ba/b179ba4b4b954a86fcfc85c8fb913b03.jpg",
    price: "₹999",
  },
  {
    url: "https://i.pinimg.com/736x/1e/47/a8/1e47a8968b3e848c652c015932bc078c.jpg",
    price: "₹1649",
  },
  {
    url: "https://i.pinimg.com/736x/80/3d/41/803d41096ec2635526d5957852f2b7c3.jpg",
    price: "₹1099",
  },
  {
    url: "https://i.pinimg.com/1200x/ba/9c/a2/ba9ca29179c2f44c4ed029e3780ce764.jpg",
    price: "₹1749",
  },
  {
    url: "https://i.pinimg.com/736x/8d/e2/86/8de286cd5e9607f1c265b7ae94faaea9.jpg",
    price: "₹1799",
  },
  {
    url: "https://i.pinimg.com/1200x/b6/f6/e0/b6f6e057198ed9f3911c86a1866663a9.jpg",
    price: "₹1099",
  },
  {
    url: "https://i.pinimg.com/736x/b1/d0/81/b1d081dd1e2d458224d44aa6facc830c.jpg",
    price: "₹1399",
  },
  {
    url: "https://i.pinimg.com/1200x/fd/41/d1/fd41d1f614eb9e0b1b73dc9b83148845.jpg",
    price: "₹1949",
  },
  {
    url: "https://i.pinimg.com/736x/c1/d5/3c/c1d53c87419464f135d70bd719ad7695.jpg",
    price: "₹999",
  },
];

const stories = [
  {
    title: "How Mushak Became Lord Ganesha's Vahana",
    content:
      "Once a mischievous demon named Gajamukha was cursed and turned into a tiny mouse. This little mouse was wild and uncontrollable! One day, he stumbled into Ganesha’s path and tried to wreak havoc. But Ganesha calmly trapped him under his massive foot. The mouse begged for mercy—and so, Ganesha made him his divine ride. That’s how the mighty Lord rides a humble mouse!",
    icon: "https://img.icons8.com/deco/48/mouse--v2.png",
  },
  {
    title: "The Modak Mystery – Why Ganesha Loves Modaks",
    content:
      "One day, Goddess Parvati made a batch of sweet modaks. Ganesha loved them so much that he declared, “Whoever offers me modaks with devotion shall be blessed with wisdom and prosperity.” Since then, modaks became his sweet of choice—and a must-have for every Ganesh Chaturthi!",
    icon: "https://img.icons8.com/?size=100&id=lbHw3dWD9ssc&format=png&color=000000",
  },
  {
    title: "The Broken Tusk – Ganesha the Scribe",
    content:
      "When Sage Vyasa wanted to write the Mahabharata, he needed someone who could write nonstop. Ganesha agreed—but only if Vyasa recited without pause. When his pen broke mid-writing, Ganesha broke off his own tusk and continued writing. That’s why you often see him with one tusk—he literally gave a piece of himself for wisdom!",
    icon: "https://img.icons8.com/?size=100&id=101717&format=png&color=000000",
  },
  {
    title: "The Moon’s Curse – Why We Don’t Look at the Moon",
    content:
      "Once, Ganesha tripped and fell from his mouse. The moon saw and laughed. Enraged, Ganesha cursed the moon: “On Chaturthi, whoever looks at you will face false accusations!” That’s why it’s said we should avoid looking at the moon on Ganesh Chaturthi night. So... no peeking!",
    icon: "https://img.icons8.com/?size=100&id=54382&format=png&color=000000",
  },
  {
    title: "Ganesha’s Birth – Guarding the Door",
    content:
      "Parvati created Ganesha from turmeric paste and asked him to guard the door while she bathed. When Shiva tried to enter, Ganesha (unaware he was Shiva!) stopped him. A battle broke out, and Shiva beheaded him in rage. To calm Parvati, Shiva replaced his head—with that of a wise young elephant. Thus, Ganesha was reborn as the elephant-headed god of beginnings!",
    icon: "https://img.icons8.com/?size=100&id=12061&format=png&color=000000",
  },
];

export { images, stories };
