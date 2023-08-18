import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center border border-primary-foreground py-sm px-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-pinkDark text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary"
			},
			size: {
				default: "h-10",
				sm: "h-9 px-3",
				lg: "h-11 px-8"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
