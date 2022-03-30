class RenameColumnSubscribe < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :subscribe, :subscribed
  end
end
