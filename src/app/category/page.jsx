import Image from "next/image";
import Link from 'next/link'

export const contents = [
    {
      id: 1,
      title: "The Art of Free Solo Climbing",
      category: "sports",
      author: "Alex Honnold",
      description: [
        "A thrilling account of the challenges and triumphs of free solo climbing, written by the legendary climber Alex Honnold.",
        "In this gripping narrative, Honnold shares his most daring adventures, from scaling towering cliffs without ropes to pushing the boundaries of human potential.",
        "Through vivid descriptions and personal reflections, he offers insight into the mindset of an elite athlete and the pursuit of excellence. Whether you're a seasoned climber or an armchair adventurer, this book will leave you inspired to reach new heights."
      ],
      date: "May 1, 2023"
    },
    {
      id: 2,
      title: "The Oscars: A Night of Glamour and Drama",
      category: "entertainment",
      author: "Emma Thompson",
      description: [
        "An insider's look at the glitz and glamour of the Oscars, with behind-the-scenes stories and red carpet moments, penned by actress Emma Thompson.",
        "From the tension-filled anticipation in the days leading up to the ceremony to the emotional acceptance speeches that capture hearts worldwide, Thompson captures the essence of Hollywood's biggest night.",
        "With wit and candor, she navigates the politics and personalities that define the film industry's most prestigious event. Whether you're a movie buff or simply fascinated by celebrity culture, this book offers a front-row seat to the magic of the silver screen."
      ],
      date: "March 15, 2024"
    },
      
    {
      id: 3,
      title: "Wanderlust: Exploring the Hidden Gems of Southeast Asia",
      category: "travel",
      author: "Anthony Bourdain",
      description: [
        "Join Anthony Bourdain on a culinary and cultural journey through the enchanting landscapes and vibrant cities of Southeast Asia.",
        "With his trademark wit and curiosity, Bourdain introduces readers to the diverse cuisines and traditions that make this region a must-visit destination.",
        "From savoring street food in Bangkok to exploring ancient temples in Angkor Wat, he revels in the rich tapestry of experiences that await adventurous travelers. Whether you're planning your next trip or simply dreaming of far-off places, this book will ignite your wanderlust and broaden your horizons."
      ],
      date: "November 20, 2023"
    },
    {
      id: 4,
      title: "The Power of Lifelong Learning",
      category: "education",
      author: "Malala Yousafzai",
      description: [
        "Nobel laureate Malala Yousafzai reflects on the transformative impact of education and advocates for lifelong learning in this inspiring book.",
        "Drawing on her own experiences as an advocate for girls' education, Malala explores the power of knowledge to break down barriers and create positive change.",
        "From the importance of access to education for all children to the role of continuous learning in personal growth, she makes a compelling case for investing in education as a fundamental human right. Whether you're a student, educator, or lifelong learner, this book will remind you of the power of education to shape lives and communities."
      ],
      date: "February 5, 2024"
    },
    {
      id: 5,
      title: "Innovation Nation: A History of Technological Breakthroughs",
      category: "technology",
      author: "Elon Musk",
      description: [
        "Tech mogul Elon Musk traces the history of innovation, from the earliest inventions to the cutting-edge technologies shaping our future.",
        "In this thought-provoking exploration, Musk delves into the minds of inventors and visionaries who have revolutionized the way we live and work.",
        "From the invention of the wheel to the advent of artificial intelligence, he examines the societal impacts of technological advancements and challenges readers to consider the ethical implications of progress. Whether you're a tech enthusiast or a skeptic of Silicon Valley, this book offers a fascinating glimpse into the past, present, and future of innovation."
      ],
      date: "April 30, 2023"
    },
    {
      id: 6,
      title: "Fashion Forward: Trends and Icons of the 21st Century",
      category: "fashion",
      author: "Anna Wintour",
      description: [
        "Vogue's Anna Wintour showcases the most influential fashion trends and style icons of the 21st century, from the runway to the streets.",
        "With her keen eye for design and unparalleled taste, Wintour celebrates the creativity and ingenuity of designers who have shaped the fashion landscape.",
        "From haute couture to streetwear, she explores the cultural significance of clothing and the evolving role of fashion in society. Whether you're a fashion aficionado or simply curious about the latest trends, this book offers a comprehensive guide to the ever-changing world of style."
      ],
      date: "September 8, 2023"
    },
    {
      id: 7,
      title: "Mastering the Game: Strategies for Success in Basketball",
      category: "sports",
      author: "LeBron James",
      description: [
        "NBA superstar LeBron James shares his insights and strategies for success on and off the basketball court in this motivational guide.",
        "Drawing on his own experiences as one of the greatest athletes of all time, James offers practical advice for achieving your goals and overcoming obstacles.",
        "From mastering fundamental skills to cultivating a winning mindset, he provides a playbook for aspiring athletes and anyone striving for excellence. Whether you're a basketball fan or simply seeking inspiration, this book will empower you to unleash your full potential."
      ],
      date: "June 25, 2023"
    },
    {
      id: 8,
      title: "Hollywood Confidential: Tales from Behind the Scenes",
      category: "entertainment",
      author: "Steven Spielberg",
      description: [
        "Renowned filmmaker Steven Spielberg lifts the veil on Hollywood's secrets, with fascinating stories and anecdotes from behind the scenes.",
        "From the golden age of cinema to the rise of streaming platforms, Spielberg offers a candid look at the highs and lows of the entertainment industry.",
        "With insider insights and firsthand accounts, he reveals the creative process behind iconic films and the challenges of bringing stories to life on the big screen. Whether you're a cinephile or simply intrigued by the magic of movies, this book provides a captivating glimpse into the world of filmmaking."
      ],
      date: "October 12, 2023"
    },
    
  ];

  console.log(contents);
  

export default function Category() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {contents.map(content =>(
            <Link key={content.id} href={`/blog/${content.title.split(' ').join('-')}`} title={content.title}>
            <section  className={`text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${content.id}.jpg)`}}>
                <h2>{content.title}</h2>

            </section>
            </Link>

        ))}

    </div>
  )
}
