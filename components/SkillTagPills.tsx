"use client";

import {
  TAGS,
  isSkillTagKey,
  type TagKey,
} from "@/components/skillTagDefinitions";
import {
  NeutralTagPill,
  SkillTagRow,
  TagPillSurface,
} from "@/components/SkillTagPills.styles";

export type { TagKey } from "@/components/skillTagDefinitions";
export { TAGS } from "@/components/skillTagDefinitions";

export function SkillTagPill({ tagKey }: { tagKey: TagKey }) {
  const { label, bg, color } = TAGS[tagKey];
  return (
    <TagPillSurface $bg={bg} $fg={color}>
      {label}
    </TagPillSurface>
  );
}

type RowProps = {
  tags: readonly TagKey[];
  variant?: "hero" | "timeline";
};

export function SkillTagPillRow({ tags, variant = "hero" }: RowProps) {
  return (
    <SkillTagRow $variant={variant}>
      {tags.map((key) => (
        <SkillTagPill key={key} tagKey={key} />
      ))}
    </SkillTagRow>
  );
}

/** Colored pill when `label` is in TAGS; otherwise a neutral themed pill. */
export function ProjectSkillTag({ label }: { label: string }) {
  if (isSkillTagKey(label)) {
    return <SkillTagPill tagKey={label} />;
  }
  return <NeutralTagPill>{label}</NeutralTagPill>;
}
