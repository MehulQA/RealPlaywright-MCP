import { test } from '@playwright/test';
import { MCPServer } from '../../../../mcp/server/mcpServer';

test('AI Login Test', async ({ page }) => {

  await MCPServer.execute('login', page);

});