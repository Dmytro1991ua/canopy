import {
  WHY_EYEBROW,
  WHY_HEADING_LINE1,
  WHY_HEADING_LINE2,
  WHY_PARA_1,
  WHY_PARA_2,
  WHY_POINTS,
} from './WhyItMatters.constants'

export default function WhyItMattersText() {
  return (
    <div className="flex flex-col gap-5">
      <span className="eyebrow">{WHY_EYEBROW}</span>

      <h2 className="section-heading">
        {WHY_HEADING_LINE1}
        <br />
        {WHY_HEADING_LINE2}
      </h2>

      <p className="body-lg">{WHY_PARA_1}</p>
      <p className="body-lg">{WHY_PARA_2}</p>

      <div className="mt-2 flex flex-col gap-4">
        {WHY_POINTS.map((point) => (
          <div key={point.title} className="flex items-start gap-4">
            <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
              {point.iconNode}
            </div>
            <div>
              <strong className="mb-0.5 block text-[15px] font-semibold text-green-deep">
                {point.title}
              </strong>
              <span className="text-sm leading-relaxed text-green-forest/70">
                {point.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
