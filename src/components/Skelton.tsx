import { type SkeltonVariants, skelton } from "../recipes/skelton";

type Props = SkeltonVariants & {};

/**
 * スケルトン
 * @param param0
 * @returns JSX
 */
export function Skelton({ type }: Props) {
  return <div className={skelton({ type })} />;
}
