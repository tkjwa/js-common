import { ILogger } from "./loggerInterface";
export declare abstract class GenercicLogger implements ILogger {
    protected abstract log(level: string, message: string): void;
    emerg(message: string): void;
    alert(message: string): void;
    crit(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    notice(message: string): void;
    info(message: string): void;
    debug(message: string): void;
}
