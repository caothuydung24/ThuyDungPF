/// <reference types="vite/client" />
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assignments as assignmentData } from "@/data/assignments";

const assignments = assignmentData;

/** @param {string} fileName */
const assetPath = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replace(/^\//, "")}`;

const images = {
  hero: assetPath("td3.jpg"),
  aboutFeature: assetPath("td1.jpg"),
  aboutPortrait: assetPath("td2.jpg"),
  setupMain: assetPath("td4.jpg"),
  setupLaptop: assetPath("td5.jpg"),
  setupCreative: assetPath("td6.jpg"),
  setupWorkspace: assetPath("td7.jpg"),
};

const skillIconByName = {
  "HTML 5": assetPath("./Skill-Icon-ri-html5-fill.svg"),
  "CSS 3": assetPath("./Skill-Icon-uiw-css3.svg"),
  Github: assetPath("./Skill-Icon-mdi-github.svg"),
  JQuery: assetPath("./Skill-Icon-akar-icons-jquery-fill@2x.png"),
  "VS Code": assetPath("./Skill-Icon-akar-icons-vscode-fill@2x.png"),
  Git: assetPath("./Skill-Icon-bi-git.svg"),
  MongoDB: assetPath("./Skill-Icon-bxl-mongodb.svg"),
  "RESTFull APIs": assetPath("./Skill-Icon-mdi-api.svg"),
  Boostrap: assetPath("./Skill-Icon-mdi-bootstrap.svg"),
  FIREBASE: assetPath("./Skill-Icon-mdi-firebase.svg"),
  ReactJS: assetPath("./Skill-Icon-mdi-react.svg"),
  Figma: assetPath("./Skill-Icon-solar-figma-bold.svg"),
  Javascript: assetPath("./Skill-Icon-teenyicons-nodejs-solid.svg"),
};

const blogPosts = [
  {
    title: "Tuần 1: Khám phá thế giới phần cứng máy tính",
    date: "Tháng 3, 2025",
    excerpt:
      "Lần đầu tiên tôi thực sự hiểu được bên trong một chiếc máy tính có những gì. Bài học về phần cứng mở ra cho tôi một góc nhìn hoàn toàn mới...",
    tags: ["Phần cứng", "Tuần 1"],
  },
  {
    title: "Tuần 2: Nghệ thuật tìm kiếm thông tin trên mạng",
    date: "Tháng 3, 2025",
    excerpt:
      "Tôi nhận ra mình đã tìm kiếm trên Google không hiệu quả suốt bao nhiêu năm. Các kỹ thuật Boolean và tìm kiếm nâng cao thực sự thay đổi cách tôi học...",
    tags: ["Thông tin số", "Tuần 2"],
  },
  {
    title: "Tuần 3: AI không còn xa lạ nữa",
    date: "Tháng 4, 2025",
    excerpt:
      "ChatGPT, Gemini, hay các mô hình học máy — giờ tôi đã hiểu chúng hoạt động như thế nào và tại sao AI lại đang thay đổi mọi thứ xung quanh chúng ta...",
    tags: ["AI", "Tuần 3"],
  },
];

export default function Portfolio() {
  const [expandedAssignment, setExpandedAssignment] = useState(null);

  const skills = [
    { name: "HTML 5", src: skillIconByName["HTML 5"] },
    { name: "CSS 3", src: skillIconByName["CSS 3"] },
    { name: "Github", src: skillIconByName.Github },
    { name: "JQuery", src: skillIconByName.JQuery },
    { name: "VS Code", src: skillIconByName["VS Code"] },
    { name: "Git", src: skillIconByName.Git },
    { name: "MongoDB", src: skillIconByName.MongoDB },
    { name: "RESTFull APIs", src: skillIconByName["RESTFull APIs"] },
    { name: "Boostrap", src: skillIconByName.Boostrap },
    { name: "FIREBASE", src: skillIconByName.FIREBASE },
    { name: "ReactJS", src: skillIconByName.ReactJS },
    { name: "Figma", src: skillIconByName.Figma },
    { name: "Javascript", src: skillIconByName.Javascript },
  ];

  return (
    <main className="max-w-[1920px] w-full mx-auto relative bg-background overflow-clip text-foreground">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] flex justify-between w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-1 h-full bg-foreground" />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-6 z-50 mx-4 md:mx-[clamp(16px,2vw,38px)] flex flex-row justify-between items-center p-[15px] rounded-[16px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] bg-background/80 backdrop-blur-md">
        <div className="flex flex-row items-center gap-[18px]">
          <p className="text-[clamp(20px,2.4vw,46px)] font-extrabold leading-none text-foreground">
            PORTFOLIO
          </p>
          <div className="bg-secondary w-5 h-5 rounded-full" />
        </div>
        <div className="hidden lg:flex flex-row items-center gap-[clamp(16px,1.7vw,33px)]">
          {[
            { label: "Giới thiệu", href: "#about" },
            { label: "Kỹ năng", href: "#services" },
            { label: "Dự án", href: "#project" },
            { label: "Nhật ký", href: "#blog" },
            { label: "Tổng kết", href: "#reflection" },
            { label: "Liên hệ", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[clamp(14px,1.3vw,22px)] font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="flex flex-row items-center gap-2 p-2.5 bg-primary rounded-[57px] hover:scale-105 transition-transform"
        >
          <span className="text-[clamp(14px,1.25vw,22px)] font-bold text-primary-foreground px-3">
            Liên hệ
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-[clamp(25px,5.2vw,100px)] mx-4 md:mx-10 relative rounded-[20px] overflow-clip aspect-[16/9] md:aspect-[1843/906] z-10"
      >
        <img
          className="w-full h-full object-cover shadow-[inset_0_0_0_1px_hsl(var(--foreground))]"
          src={images.hero}
          alt="Không gian công nghệ"
        />
        {/* Overlay tối đều, nhẹ, giữ ảnh vẫn sống động ở rìa */}
        <div className="absolute inset-0 bg-figma-subtle opacity-[0.35]" />
        {/* Gradient tập trung sau chữ để đảm bảo tương phản dù mây đổi màu */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,20,60,0.55)_0%,rgba(30,20,60,0.18)_55%,transparent_80%)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(21px,2.25vw,45px)] font-medium text-white mb-2 tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(40,20,70,0.55)]"
          >
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[clamp(54px,9vw,225px)] font-extrabold text-white leading-none heading drop-shadow-[0_8px_36px_rgba(60,35,110,0.55)]"
          >
            Cao Thùy Dung
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-[clamp(21px,2.25vw,48px)] font-light text-white/90 mt-4"
          >
            Sinh viên Kinh tế quốc tế · UEB-VNU
          </motion.p>
        </div>
      </motion.section>

      {/* About Me Section */}
      <section
        id="about"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-10 z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Giới Thiệu
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-[20px] p-8 md:p-[clamp(16px,2.1vw,40px)] flex flex-col gap-6"
            >
              <p className="text-[clamp(28px,3.5vw,60px)] font-extrabold leading-none text-secondary-foreground">
                Xin chào! 👋
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-secondary-foreground">
                Tôi là <strong>Cao Thùy Dung</strong>, sinh viên ngành{" "}
                <strong>Kinh tế quốc tế</strong>, UEB-VNU. Tôi luôn tin rằng mỗi
                trải nghiệm đều là một cơ hội để học hỏi, hoàn thiện bản thân và
                tiến gần hơn đến những mục tiêu mình theo đuổi.
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-secondary-foreground">
                Tôi là người có tinh thần trách nhiệm, ham học hỏi và luôn chủ
                động khám phá những điều mới. Tôi yêu thích việc tìm hiểu về
                công nghệ, trí tuệ nhân tạo (AI), marketing vì đây là những lĩnh
                vực có khả năng tạo ra nhiều giá trị trong thời đại số. Bên cạnh
                đó, tôi cũng dành nhiều thời gian để học ngoại ngữ vì tôi tin
                rằng ngôn ngữ không chỉ giúp kết nối con người mà còn mở ra
                nhiều cơ hội trong môi trường toàn cầu.
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-secondary-foreground">
                Mình thích dành thời gian để khám phá những công nghệ mới, tìm
                hiểu về AI, thiết kế website và xây dựng các sản phẩm mang tính
                sáng tạo. Ngoài ra, mình cũng yêu thích học ngoại ngữ, đọc tài
                liệu, chơi cầu lông và xem phim để cân bằng giữa học tập và cuộc
                sống. Những sở thích này giúp mình rèn luyện tư duy, tính kiên
                trì và luôn giữ tinh thần sẵn sàng học hỏi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_hsl(var(--foreground))] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-primary">
                🎯 Mục tiêu học tập
              </p>
              <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6] text-foreground">
                Mục tiêu của mình là xây dựng nền tảng kiến thức vững chắc về
                kinh tế, marketing và công nghệ, đồng thời phát triển khả năng
                ứng dụng AI vào học tập cũng như công việc. Mình mong muốn mỗi
                môn học không chỉ dừng lại ở điểm số mà còn mang lại những kỹ
                năng thực tế có thể áp dụng vào các dự án sau này. Bên cạnh đó,
                mình luôn đặt ra những mục tiêu cụ thể để không ngừng hoàn thiện
                bản thân:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Nâng cao kỹ năng nghiên cứu và tư duy phản biện.",
                  "Thành thạo các công cụ số và AI phục vụ học tập.",
                  "Cải thiện trình độ tiếng Anh và tiếng Trung.",
                  "Chủ động tham gia các dự án và hoạt động thực tế.",
                  "Xây dựng portfolio ngày càng chuyên nghiệp.",
                ].map((goal, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6] text-foreground">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[20px] w-full h-[350px] xl:h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-[1]"
                src={images.aboutFeature}
                alt="Không gian sáng tạo nội dung"
              />
              <div className="absolute inset-0 bg-background opacity-[0.3] rounded-[20px] z-[2]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-[20px] p-8 bg-foreground/10 shadow-[inset_0_0_0_1px_hsl(var(--foreground))] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-primary">
                📌 Mục đích Portfolio
              </p>
              <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6] text-foreground">
                Portfolio này được xây dựng nhằm lưu giữ hành trình học tập,
                những dự án, sản phẩm và thành quả mà tôi đã thực hiện trong quá
                trình phát triển bản thân. Đây không chỉ là nơi thể hiện kiến
                thức và kỹ năng, mà còn phản ánh tư duy, tinh thần học hỏi và sự
                nghiêm túc của tôi đối với từng công việc.
              </p>
              <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6] text-foreground">
                Tôi hy vọng portfolio sẽ giúp người xem hiểu rõ hơn về con
                người, năng lực và định hướng phát triển của mình, đồng thời là
                động lực để tôi tiếp tục cố gắng, tích lũy kinh nghiệm và chinh
                phục những mục tiêu lớn hơn trong tương lai.
              </p>
              <p className="italic text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6] text-foreground">
                "Thành công không đến từ việc biết nhiều hơn người khác, mà đến
                từ việc mỗi ngày đều cố gắng trở nên tốt hơn chính mình."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="mt-[clamp(38px,7.8vw,150px)] bg-primary py-[20px] overflow-clip flex relative z-10">
        <motion.div
          className="flex flex-row items-center gap-12 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 w-20 shrink-0"
            >
              <div className="h-20 w-20 relative flex items-center justify-center">
                <img
                  src={skill.src}
                  className="max-w-full max-h-full object-contain"
                  alt={skill.name}
                />
              </div>
              <p className="text-[clamp(14px,1.3vw,25px)] font-bold text-primary-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mt-[clamp(50px,10.4vw,200px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(60px,11.77vw,226px)] font-extrabold leading-[1.1] md:leading-[1.3] max-w-[1819px] text-foreground heading"
        >
          Các <span className="text-secondary">kỹ năng</span> tôi đã phát triển
        </motion.p>

        <div className="mt-[clamp(25px,5.2vw,100px)] relative flex flex-col xl:flex-row items-start justify-between">
          <div className="relative w-full max-w-[1030px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-[40px] md:rounded-[72px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] p-6 md:p-[clamp(16px,3.4vw,66px)] flex flex-col gap-10 relative z-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <img
                      src={images.aboutPortrait}
                      className="w-[100px] md:w-[141px] h-[100px] md:h-[141px] rounded-full object-cover shadow-[inset_0_0_0_1px_hsl(var(--foreground))] z-[3] relative"
                      alt="Ảnh chân dung"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full shadow-[inset_0_0_0_2px_hsl(var(--foreground))] z-[4]" />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                    <p className="text-[clamp(22px,2.08vw,40px)] font-bold text-secondary-foreground">
                      Cao Thùy Dung
                    </p>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                      <p className="text-[14px] md:text-[18px] font-medium text-secondary-foreground">
                        📍 Hà Nội, Việt Nam
                      </p>
                    </div>
                    <p className="text-[14px] md:text-[18px] font-bold text-secondary-foreground">
                      Sinh viên Kinh tế quốc tế · Năm 1 · UEB-VNU
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[clamp(20px,2.08vw,36px)] font-extrabold leading-[1.2] text-secondary-foreground">
                  Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
                </p>
                <p className="text-[clamp(16px,1.5vw,26px)] font-normal leading-[1.6] text-secondary-foreground">
                  Qua các bài thực hành và quá trình xây dựng Portfolio, mình đã
                  rèn luyện thêm nhiều kỹ năng số cần thiết. Mình biết cách
                  thiết kế giao diện web bằng HTML và CSS, quản lý mã nguồn trên
                  GitHub và triển khai website bằng GitHub Pages. Đồng thời,
                  mình cũng học được cách viết prompt rõ ràng, chỉnh sửa nội
                  dung do AI hỗ trợ và từng bước hoàn thiện sản phẩm của mình.
                </p>
                <p className="text-[clamp(16px,1.5vw,26px)] font-normal leading-[1.6] text-secondary-foreground">
                  Điều mình nhận ra là kỹ năng không đến từ việc sử dụng nhiều
                  công cụ, mà đến từ việc hiểu cách vận dụng chúng đúng mục đích
                  và không ngừng cải thiện qua từng lần thực hành.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="project"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3vw,60px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Dự Án
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <p className="text-center text-[clamp(16px,1.5vw,26px)] font-light text-foreground/70 -mt-4">
          6 bài tập thuộc môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {assignments.map((assignment, i) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[20px] overflow-hidden shadow-[inset_0_0_0_1px_hsl(var(--foreground))] bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="bg-secondary p-6 flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[13px] font-bold text-secondary-foreground/70 uppercase tracking-widest">
                    {assignment.baiTap}
                  </span>
                  <span className="text-3xl">{assignment.icon}</span>
                </div>
                <p className="text-[clamp(16px,1.5vw,22px)] font-extrabold text-secondary-foreground leading-[1.3]">
                  {assignment.title}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[13px] font-bold text-primary uppercase tracking-widest mb-2">
                    🎯 Mục tiêu
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-foreground/80">
                    {assignment.goal}
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-bold text-primary uppercase tracking-widest mb-2">
                    📋 Tóm tắt
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-foreground/80">
                    {assignment.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {assignment.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_hsl(var(--primary))] text-[12px] font-bold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/assignments/${assignment.id}`}
                  className="flex flex-row items-center justify-center gap-2 w-full py-3 px-6 bg-secondary rounded-[12px] hover:scale-[1.02] transition-transform text-secondary-foreground font-bold text-[clamp(14px,1.2vw,18px)]"
                >
                  <span>📄</span>
                  <span>Bài học chi tiết</span>
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Set-Up Section */}
      <section
        id="set-up"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,2.8vw,53px)] grid grid-cols-1 xl:grid-cols-[832fr_910fr] gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-[clamp(16px,3.2vw,62px)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
              <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
                Set - Up
              </h2>
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
            </div>
            <p className="text-[clamp(25px,2.34vw,45px)] font-extrabold leading-[1.26] text-foreground heading">
              CÔNG CỤ VÀ THIẾT BỊ CỦA TÔI
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-normal leading-[1.6] text-foreground/70">
              Những công cụ tôi sử dụng hàng ngày trong học tập và làm việc
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                i1: images.setupLaptop,
                title: "Máy tính / Laptop",
                sub: "Thiết bị học tập chính",
                inset: true,
              },
              {
                i1: images.setupCreative,
                title: "Google Scholar",
                sub: "Công cụ nghiên cứu & học thuật",
                inset: false,
              },
              {
                i1: images.setupWorkspace,
                title: "Google Workspace",
                sub: "Làm việc và cộng tác nhóm",
                inset: true,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 bg-muted rounded-[20px] w-full"
              >
                <div className="w-full sm:w-[226px] h-[150px] shrink-0 rounded-[20px] bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={item.i1}
                    className={`object-cover rounded-[14px] ${item.inset ? "w-[88%] h-[88%]" : "w-full h-full"}`}
                    alt="Setup Item"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="text-[clamp(19px,1.82vw,30px)] font-extrabold text-primary">
                    {item.title}
                  </p>
                  <p className="text-[16px] md:text-[18px] font-normal text-primary/80">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] md:aspect-[910/591]"
          >
            <img
              src={images.setupMain}
              className="w-full h-full object-cover rounded-[20px] shadow-[inset_0_0_0_8px_hsl(var(--foreground))] md:shadow-[inset_0_0_0_18px_hsl(var(--foreground))]"
              alt="Không gian làm việc"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              images.setupLaptop,
              images.setupCreative,
              images.setupWorkspace,
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 p-2.5 bg-muted rounded-[15px] w-full"
              >
                <img
                  src={src}
                  className="w-full aspect-[270/164] object-cover rounded-[20px] shadow-[inset_0_0_0_4px_hsl(var(--foreground))]"
                  alt="Chi tiết thiết lập"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Nhật ký Section */}
      <section
        id="blog"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-16 flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Nhật Ký Học Tập
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-[clamp(20px,5.2vw,100px)]">
          {/* Left sticky */}
          <div className="flex flex-col gap-6 xl:sticky top-32 h-fit">
            <p className="text-[clamp(32px,3.91vw,65px)] font-extrabold leading-[1.3] tracking-[-0.01em] text-foreground heading">
              Hành trình <span className="text-secondary">học hỏi</span> từng
              ngày
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-light leading-[1.7] text-foreground/70">
              Đây là nơi tôi ghi lại những suy nghĩ, khám phá và bài học từ mỗi
              tuần học. Nhật ký giúp tôi nhìn lại hành trình và tiếp tục tiến
              bộ.
            </p>
          </div>

          {/* Right blog posts */}
          <div className="flex flex-col gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 pt-6 border-t-[2px] border-foreground/20 group cursor-pointer"
              >
                <div className="flex flex-row flex-wrap gap-2">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_hsl(var(--primary))] text-[12px] font-bold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[13px] text-foreground/50 font-light self-center ml-2">
                    {post.date}
                  </span>
                </div>
                <p className="text-[clamp(18px,1.5vw,26px)] font-extrabold group-hover:text-secondary transition-colors text-foreground">
                  {post.title}
                </p>
                <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.7] text-foreground/70">
                  {post.excerpt}
                </p>
                <p className="text-primary font-bold text-[14px] group-hover:underline">
                  Đọc thêm →
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection / Tổng kết Section */}
      <section
        id="reflection"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(28px,4.5vw,86px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Tổng Kết
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Cảm nhận */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3 bg-secondary rounded-[20px] p-8 md:p-12"
          >
            <p className="text-[clamp(24px,2.5vw,46px)] font-extrabold text-secondary-foreground mb-6">
              💭 Trải nghiệm & cảm nhận
            </p>
            <p className="text-[clamp(16px,1.4vw,24px)] font-normal leading-[1.8] text-secondary-foreground/90">
              Nhìn lại chặng đường 15 tuần học học phần Công nghệ số, mình nhận
              thấy bản thân đã có nhiều thay đổi tích cực. Trước đây, mình chủ
              yếu học theo phương pháp truyền thống và chưa có nhiều cơ hội tiếp
              cận với các công cụ công nghệ hiện đại. AI, GitHub hay việc xây
              dựng một website cá nhân đều là những điều khá mới mẻ đối với
              mình. Tuy nhiên, thông qua các bài học, bài thực hành và dự án
              trong học phần, mình dần nhận ra rằng công nghệ không chỉ giúp
              việc học trở nên hiệu quả hơn mà còn mở ra nhiều cách tiếp cận mới
              trong việc giải quyết vấn đề và phát triển bản thân.
            </p>
            <p className="text-[clamp(16px,1.4vw,24px)] font-normal leading-[1.8] text-secondary-foreground/90">
              Điều mình nhận được sau học phần không chỉ là những kiến thức về
              công nghệ số mà còn là sự thay đổi trong tư duy học tập. Mình biết
              cách tìm kiếm và chọn lọc thông tin đáng tin cậy, sử dụng AI như
              một công cụ hỗ trợ thay vì phụ thuộc hoàn toàn vào nó, đồng thời
              hiểu rõ hơn về trách nhiệm và đạo đức khi sử dụng công nghệ. Việc
              tự thiết kế và hoàn thiện Portfolio cũng giúp mình rèn luyện tính
              kiên trì, khả năng tự học và sự cẩn thận trong từng sản phẩm mình
              tạo ra.
            </p>
          </motion.div>

          {/* Kiến thức & Kỹ năng */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_hsl(var(--foreground))] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-primary">
              📚 Kỹ năng đã đạt được
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Quản lý và tìm kiếm thông tin: Biết cách tìm kiếm, chọn lọc và đánh giá nguồn thông tin đáng tin cậy, đồng thời quản lý tài liệu một cách khoa học để phục vụ học tập hiệu quả.",
                "Khai thác AI trong học tập: Biết xây dựng prompt rõ ràng, sử dụng AI để hỗ trợ tìm ý tưởng, phân tích và hoàn thiện nội dung, đồng thời luôn kiểm chứng và điều chỉnh kết quả theo tư duy của bản thân.",
                "Thiết kế Portfolio cá nhân: Làm quen với HTML, CSS và biết cách xây dựng một website Portfolio có giao diện trực quan, bố cục hợp lý và dễ dàng triển khai trên GitHub Pages.",
                "Làm việc nhóm và cộng tác số: Biết phối hợp với các thành viên, phân chia nhiệm vụ, trao đổi ý tưởng và sử dụng các nền tảng số để hoàn thành công việc hiệu quả.",
                "Giải quyết vấn đề và tự học: Hình thành thói quen chủ động tìm hiểu, phân tích nguyên nhân khi gặp lỗi, kiên trì thử nghiệm nhiều giải pháp và không ngừng cải thiện sản phẩm.",
                "Ý thức về đạo đức số: Hiểu được tầm quan trọng của bản quyền, trích dẫn nguồn, bảo mật thông tin và sử dụng công nghệ một cách có trách nhiệm trong môi trường số.",
              ].map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6] text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Điểm tâm đắc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_hsl(var(--foreground))] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-primary">
              ⭐ Điểm tâm đắc nhất
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "🤖",
                  title:
                    "AI không thay thế con người mà giúp con người phát triển tốt hơn.",
                  text: "Điều khiến mình tâm đắc nhất sau học phần không phải là biết thêm nhiều công cụ mới, mà là thay đổi cách nhìn về trí tuệ nhân tạo. Ban đầu mình nghĩ AI chỉ đơn giản là công cụ để tạo ra câu trả lời nhanh hơn, nhưng sau quá trình học mình nhận ra AI chỉ thực sự phát huy giá trị khi người sử dụng biết đặt câu hỏi đúng, biết chọn lọc và kiểm chứng thông tin. AI không thay thế tư duy của con người mà giúp mở rộng khả năng học tập, sáng tạo và giải quyết vấn đề.",
                },
                {
                  emoji: "🛡️",
                  title: "Trách nhiệm số quan trọng không kém kỹ năng số.",
                  text: "Một bài học mình luôn ghi nhớ là sử dụng công nghệ phải đi kèm với đạo đức và trách nhiệm. Mình hiểu rằng mỗi thông tin được chia sẻ, mỗi nội dung được tạo ra đều cần tôn trọng bản quyền, minh bạch nguồn tham khảo và kiểm chứng trước khi sử dụng. Đây là nền tảng quan trọng để trở thành một công dân số có trách nhiệm.",
                },
                {
                  emoji: "🎨",
                  title: "Học bằng dự án giúp mình trưởng thành hơn.",
                  text: "Điều mình thích nhất ở học phần là được tạo ra những sản phẩm thực tế thay vì chỉ học lý thuyết. Việc tự xây dựng Portfolio giúp mình biết cách thiết kế giao diện, sắp xếp nội dung, chỉnh sửa từng chi tiết và hoàn thiện sản phẩm theo nhiều phiên bản. Mỗi lần sửa lỗi đều giúp mình hiểu vấn đề hơn và tự tin hơn vào khả năng của bản thân.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-foreground/10 rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[15px] md:text-[17px] font-medium text-primary">
                      {item.title}
                    </h4>
                    <p className="text-[14px] md:text-[16px] font-light leading-[1.6] text-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Thách thức */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_hsl(var(--foreground))] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-primary">
              💪 Thách thức đã vượt qua
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "🖍️",
                  title: "Từ bỡ ngỡ đến chủ động với công nghệ.",
                  text: "Những tuần đầu tiên mình gặp khá nhiều khó khăn vì chưa quen với HTML, CSS, GitHub và các công cụ AI. Có những lỗi mình mất rất nhiều thời gian mới tìm được nguyên nhân, thậm chí phải làm đi làm lại nhiều lần. Tuy nhiên, chính quá trình tự tìm hiểu, thử nghiệm và sửa lỗi đã giúp mình kiên nhẫn hơn, biết cách đọc tài liệu và chủ động giải quyết vấn đề thay vì bỏ cuộc.",
                },
                {
                  emoji: "💡",
                  title: "Học cách sử dụng AI một cách thông minh.",
                  text: "Một thử thách khác là làm sao để không phụ thuộc vào AI. Ban đầu mình thường chấp nhận ngay kết quả AI tạo ra, nhưng sau khi học mình đã biết cách viết prompt rõ ràng hơn, kiểm chứng thông tin từ nhiều nguồn và chỉnh sửa nội dung theo ý tưởng của bản thân. Nhờ vậy, AI trở thành công cụ hỗ trợ chứ không phải thay thế khả năng tư duy của mình.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-foreground/10 rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[15px] md:text-[17px] font-medium text-primary">
                      {item.title}
                    </h4>
                    <p className="text-[14px] md:text-[16px] font-light leading-[1.6] text-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Liên Hệ
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1220fr_582fr] gap-[clamp(16px,2.6vw,50px)] xl:gap-[clamp(20px,5.2vw,100px)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(16px,3.1vw,60px)]"
          >
            <p className="text-[clamp(32px,3.54vw,68px)] font-extrabold leading-[1.1] text-foreground heading">
              Có câu hỏi hoặc muốn kết nối? Hãy liên hệ với tôi!
            </p>
            <p className="text-[clamp(18px,1.93vw,37px)] font-light leading-[1.4] text-foreground/70">
              Tôi luôn sẵn sàng lắng nghe và trao đổi. Đừng ngần ngại gửi tin
              nhắn cho tôi nhé.
            </p>

            <form
              className="flex flex-col gap-[23px] w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-[23px] w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-2.5 border-b-[2px] border-secondary bg-transparent text-foreground text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-foreground/50 focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="flex-1 p-2.5 border-b-[2px] border-secondary bg-transparent text-foreground text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-foreground/50 focus:border-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Lời nhắn"
                className="w-full h-[150px] md:h-[263px] p-2.5 border-b-[2px] border-secondary bg-transparent text-foreground text-[clamp(16px,1.56vw,30px)] font-light outline-none resize-none placeholder:text-foreground/50 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="flex flex-row items-center gap-[11px] p-4 md:p-5 bg-primary rounded-[58px] w-fit hover:scale-105 transition-transform mt-4"
              >
                <img
                  src={assetPath("./formkit-submit@2x.png")}
                  className="w-5 h-4"
                  alt="Gửi"
                />
                <span className="text-[16px] md:text-[20px] font-semibold text-primary-foreground">
                  Gửi tin nhắn
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-[clamp(16px,3.1vw,60px)] md:gap-[clamp(20px,5.2vw,100px)]"
          >
            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold text-foreground">
                Thông tin liên hệ
              </p>
              <a
                href="mailto:caothuydung8107@gmail.com"
                className="text-[clamp(16px,1.8vw,32px)] font-normal text-foreground hover:text-primary transition-colors break-all"
              >
                caothuydung8107@gmail.com
              </a>
              <p className="text-[clamp(14px,1.5vw,24px)] font-normal text-foreground/80">
                0383232007
              </p>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold text-foreground">
                Mạng xã hội
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    name: "Facebook",
                    icon: assetPath("./ant-design-facebook-filled.svg"),
                  },
                  {
                    name: "Instagram",
                    icon: assetPath("./ri-instagram-fill.svg"),
                  },
                  {
                    name: "Tiktok",
                    icon: assetPath("./ic-baseline-tiktok.svg"),
                  },
                  { name: "Youtube", icon: assetPath("./mdi-youtube.svg") },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex flex-row items-center gap-[15px] group w-fit"
                  >
                    <div className="w-[42px] min-h-[42px] relative flex items-center justify-center">
                      <img
                        src={social.icon}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                        alt={social.name}
                      />
                    </div>
                    <p className="text-[clamp(19px,1.82vw,35px)] font-normal group-hover:text-primary transition-colors text-foreground">
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold text-foreground">
                Địa điểm
              </p>
              <p className="text-[clamp(18px,1.8vw,32px)] font-normal leading-[1.4] text-foreground">
                Hà Nội, Việt Nam
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-12 mb-12 flex flex-col lg:flex-row justify-between items-center gap-10 z-10 relative border-t border-foreground/20 pt-10">
        <div className="flex flex-row items-center gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(19px,4.9vw,95px)]">
          <p className="text-[clamp(20px,2.34vw,45px)] font-extralight text-foreground">
            ©
          </p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-light text-foreground">
            2026
          </p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-extrabold text-foreground">
            Thùy Dung
          </p>
        </div>
        <p className="text-[clamp(16px,2.34vw,45px)] font-normal text-foreground text-center">
          Nhập môn Công nghệ số & TTNT
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-row items-center gap-2.5 hover:text-secondary transition-colors group"
        >
          <p className="text-[clamp(18px,2.34vw,45px)] font-extrabold text-foreground group-hover:text-secondary">
            LÊN ĐẦU TRANG
          </p>
        </button>
      </footer>
    </main>
  );
}
