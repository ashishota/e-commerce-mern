import { toast as sonnerToast } from "sonner";

export function useToast() {
  function toast({ title, description, variant }) {
    if (variant === "destructive") {
      sonnerToast.custom((t) => (
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <p className="font-bold">{title || "Error"}</p>
          {description && <p>{description}</p>}
          <button
            className="mt-2 bg-white text-red-500 px-3 py-1 rounded"
            onClick={() => sonnerToast.dismiss(t)}
          >
            Dismiss
          </button>
        </div>
      ));
    } else if (variant === "success") {
      sonnerToast.success(description || title);
    } else {
      sonnerToast(description || title);
    }
  }

  return { toast };
}
