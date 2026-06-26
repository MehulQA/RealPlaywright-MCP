import { test } from '@playwright/test';
import { askGemini } from '../../ai/llm/gemini';
import { MCPServer } from '../../mcp/server/mcpServer';

test('AI Login Test', async ({ page }) => {

  const command = await askGemini(
    'Return only one word: login'
  );

  console.log('AI Command:', command);

  await MCPServer.execute(command.trim(), page);

});