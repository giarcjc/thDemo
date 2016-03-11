class ChangeColumnName < ActiveRecord::Migration
  def change
  	rename_column :properties, :type, :kind
  end
end
