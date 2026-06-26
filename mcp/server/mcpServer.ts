import { Page } from '@playwright/test';
import { ToolRegistry } from './toolRegistry';

export class MCPServer {

  static async execute(command: string, page: Page) {

    switch(command.toLowerCase()) {

      case 'login':
        await ToolRegistry.login.execute(page);
        break;

      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }
}