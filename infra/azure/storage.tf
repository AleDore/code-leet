resource "azurerm_resource_group" "rg" {
  name     = "test-rg"
  location = "West Europe"
}

resource "azurerm_storage_account" "storage_test" {
  name                     = "alessiotest"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = "staging"
  }
}