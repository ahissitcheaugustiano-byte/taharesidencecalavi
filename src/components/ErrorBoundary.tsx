import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-background rounded-xl shadow-sm border border-border mt-10">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Oups ! Quelque chose s'est mal passé.
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Une erreur inattendue s'est produite lors de l'affichage de cette section. 
              Veuillez recharger la page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Recharger la page
            </button>
            {import.meta.env.MODE === "development" && (
              <pre className="mt-8 p-4 bg-muted text-left w-full overflow-auto text-xs text-muted-foreground rounded-lg">
                {this.state.error?.toString()}
              </pre>
            )}
          </div>
        )
      );
    }

    return this.props.children;
  }
}
