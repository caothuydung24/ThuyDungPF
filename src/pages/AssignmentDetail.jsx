import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { assignments } from "@/data/assignments";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function AssignmentDetail() {
  const { id } = useParams();
  const assignmentId = Number(id);
  const assignment = Number.isNaN(assignmentId)
    ? undefined
    : assignments.find((a) => a.id === assignmentId);

  if (!assignment) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center text-foreground">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <p className="text-2xl font-bold mb-4">Không tìm thấy bài học</p>
          <Link to="/" className="text-primary underline">
            Quay về trang chủ
          </Link>
        </div>
      </main>
    );
  }

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
        <Link
          to="/#project"
          className="flex flex-row items-center gap-2 p-2.5 px-5 bg-secondary rounded-[57px] hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4 text-secondary-foreground" />
          <span className="text-[clamp(14px,1.25vw,22px)] font-bold text-secondary-foreground">
            Quay lại
          </span>
        </Link>
      </nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-[clamp(25px,5vw,80px)] mx-4 md:mx-10 relative z-10"
      >
        <div className="rounded-[20px] bg-secondary p-8 md:p-[clamp(24px,4vw,80px)]">
          <p className="text-[13px] font-bold text-secondary-foreground/70 uppercase tracking-widest mb-3">
            {assignment.baiTap}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[clamp(32px,5vw,96px)] font-extrabold text-secondary-foreground leading-none mb-4 heading">
                {assignment.icon} {assignment.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {assignment.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="py-1 px-3 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-[13px] font-bold border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={assignment.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 py-3 px-6 bg-primary rounded-[12px] hover:scale-[1.02] transition-transform text-primary-foreground font-bold text-[clamp(14px,1.2vw,18px)] whitespace-nowrap shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Xem báo cáo (PDF)</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Goal */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-[clamp(30px,5vw,80px)] mx-4 md:mx-10 relative z-10"
      >
        <div className="rounded-[20px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] p-8 md:p-12 bg-foreground/5">
          <p className="text-primary font-bold text-[13px] uppercase tracking-widest mb-3">
            🎯 Mục tiêu bài học
          </p>
          <p className="text-[clamp(18px,2vw,32px)] font-light leading-[1.7] text-foreground">
            {assignment.goal}
          </p>
        </div>
      </motion.section>

      {/* Sections */}
      <section className="mt-[clamp(30px,5vw,80px)] mx-4 md:mx-10 flex flex-col gap-[clamp(24px,4vw,60px)] relative z-10 pb-[clamp(60px,10vw,150px)]">
        {assignment.sections.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.07 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Section header */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full shrink-0" />
              <h2 className="text-[clamp(20px,2vw,36px)] font-extrabold text-secondary">
                {section.title}
              </h2>
            </div>

            {/* Content */}
            {section.content && (
              <div className="rounded-[20px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] p-8 bg-foreground/5">
                <p className="text-[clamp(15px,1.3vw,22px)] font-light leading-[1.8] text-foreground">
                  {section.content}
                </p>
              </div>
            )}

            {section.table && (
              <div className="overflow-x-auto rounded-2xl border border-secondary/30">
                <table className="min-w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary/20">
                      {section.table.headers.map((head, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-left font-semibold text-secondary whitespace-nowrap border-b border-secondary/30"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          rIdx % 2 === 0 ? "bg-muted/50" : "bg-background"
                        }
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-4 py-3 align-top text-foreground border-b border-secondary/20 min-w-[160px]"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Steps */}
            {section.steps && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.steps.map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-start gap-4 p-6 rounded-[16px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] bg-foreground/5 hover:bg-foreground/10 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-extrabold text-[13px] shrink-0">
                      {s.step}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[clamp(15px,1.2vw,20px)] text-foreground">
                        {s.title}
                      </p>
                      <p className="text-[clamp(13px,1vw,16px)] font-light leading-[1.6] text-foreground/70">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            {section.highlights && (
              <div className="flex flex-col gap-3">
                {section.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-start gap-4 p-5 rounded-[14px] bg-foreground/5 shadow-[inset_0_0_0_1px_hsl(var(--foreground))]"
                  >
                    <span className="text-2xl shrink-0">{h.emoji}</span>
                    <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-foreground">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-foreground/20"
        >
          <Link
            to="/#project"
            className="flex flex-row items-center gap-2 py-3 px-6 rounded-[57px] shadow-[inset_0_0_0_1px_hsl(var(--foreground))] hover:bg-foreground/10 transition-all font-bold text-[clamp(14px,1.2vw,18px)] text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Xem các bài khác
          </Link>
          <a
            href={assignment.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 py-3 px-6 bg-secondary rounded-[12px] hover:scale-[1.02] transition-transform text-secondary-foreground font-bold text-[clamp(14px,1.2vw,18px)]"
          >
            <ExternalLink className="w-4 h-4" />
            Xem báo cáo (PDF)
          </a>
        </motion.div>
      </section>
    </main>
  );
}
