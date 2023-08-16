import { Command } from "commander";
import Commands from "./Option/Command.ts";

const program = new Command();

program.name("Maintenance").description("Maintenance tools");

Commands?.forEach((command) => {
	const commandProgram = program
		.command(command.Name)
		.description(
			typeof command.Description !== "undefined"
				? command.Description
				: ""
		)
		.action(command.Action);

	command.Arguments?.forEach((argument) => {
		commandProgram.argument(argument.Name, argument.Description);
	});
});

program.parse();
